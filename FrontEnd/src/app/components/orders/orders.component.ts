import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Order, Statu } from 'src/app/entities/order';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  orders?: Order[];

  ngOnInit(): void {
    this.getAllOrdersInHold();
  }

  getAllOrdersInHold(): void {
    this.orderService.getAllOrdersInHold().subscribe((orders) => {
      this.orders = orders;
      // DataTable initialization
      setTimeout(() => {
        $('#datatableexample').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu: [5, 10, 25],
        });
      }, 1);
    });
  }

  acceptOrder(order: Order) {
    Swal.fire({
      title: 'Accept Order',
      text: 'Are you sure you want to accept this order?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Accept',
    }).then((result) => {
      if (result.isConfirmed) {
        order.state = Statu.Accepte;
        this.orderService.acceptOrder(order)
          .pipe(
            catchError((error: HttpErrorResponse) => {
              console.error('HTTP Error:', error.status, error.statusText);
              if (error.status == 200) {
                this.generateInvoice(order); // Générer la facture PDF
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Order accepted successfully',
                  showConfirmButton: false,
                  timer: 1500,
                });
                this.getAllOrdersInHold();
              }
              return of(null); // Retourne un observable vide
            })
          )
          .subscribe(() => {
            this.getAllOrdersInHold();
          });
      }
    });
  }

  

  refuseOrder(order: Order) {
    Swal.fire({
      title: 'Refuse Order',
      text: 'Are you sure you want to refuse this order?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Refuse',
    }).then((result) => {
      if (result.isConfirmed) {
        order.state = Statu.Refuse;
        this.orderService.acceptOrder(order)
          .pipe(
            catchError((error: HttpErrorResponse) => {
              console.error('HTTP Error:', error.status, error.statusText);
              if (error.status == 200) {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Order refused successfully',
                  showConfirmButton: false,
                  timer: 1500,
                });
                this.getAllOrdersInHold();
              }
              return of(null); // Retourne un observable vide
            })
          )
          .subscribe(() => {
            this.getAllOrdersInHold();
          });
      }
    });
  }

  generateInvoice(order: Order) {
    // Créer un nouveau document PDF
    const doc = new jsPDF();

    // Définir la taille et la police par défaut
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');

    // Couleur pour le titre
    doc.setTextColor(0, 0, 255); // Bleu
    doc.setFillColor(255, 255, 255); // Blanc

    // Définir le titre de la facture
    doc.setFontSize(20);
    doc.text('Facture de Location de Voiture', 105, 15, { align: 'center' });

    // Couleur pour le nom de l'entreprise et la date
    doc.setTextColor(0, 0, 0); // Noir

    // Ajouter le nom de l'entreprise et la date
    doc.setFontSize(12);
    doc.text('CARDEAL', 105, 25, { align: 'center' });
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 105, 35, { align: 'center' });

    // Ajouter des bordures pour le titre
    doc.setLineWidth(0.5);
    doc.line(15, 45, 195, 45);

    // Ajouter des informations de commande au PDF
    const data = {
      client: `${order.client.firstName} ${order.client.lastName}`,
      email: order.client.email,
      cin: order.client.cin,
      car: order.car.brand,
      model: order.car.model,
      totalCost: order.totalCost,
      image: order.car.image,
      startDate: new Date(order.car.start_Date).toLocaleDateString(), // Convertir le format de date
      endDate: new Date(order.car.end_Date).toLocaleDateString(), // Convertir le format de date
      // Ajoutez plus d'informations si nécessaire
    };

    // Définir la position initiale du contenu
    let yPos = 50;

    // Ajouter une image de voiture
    const img = new Image();
    img.src = `../../../assets/images/${data.image}`;
    doc.addImage(img, 'JPEG', 20, yPos, 50, 50);

    // Ajouter des bordures pour le contenu
    doc.rect(15, yPos, 180, 80);

    // Ajouter des informations de commande
    doc.setTextColor(0, 0, 0); // Noir
    doc.text(`Client: ${data.client}`, 85, yPos + 10);
    doc.text(`Email: ${data.email}`, 85, yPos + 20);
    doc.text(`CIN: ${data.cin}`, 85, yPos + 30);
    doc.text(`Voiture: ${data.car}`, 85, yPos + 40);
    doc.text(`Modèle: ${data.model}`, 85, yPos + 50);
    doc.text(`Début: ${data.startDate}`, 85, yPos + 60);
    doc.text(`Fin: ${data.endDate}`, 85, yPos + 70);

    // Ajouter la ligne totale
    yPos += 80;
    doc.setLineWidth(0.5);
    doc.line(15, yPos, 195, yPos);

    // Couleur pour le total
    doc.setTextColor(255, 0, 0); // Rouge

    // Ajouter le coût total
    yPos += 10;
    doc.text(`Total: ${data.totalCost} Dh`, 150, yPos);

    // Sauvegarder le PDF
    doc.save('Facture_Location_Voiture.pdf');
}



}
