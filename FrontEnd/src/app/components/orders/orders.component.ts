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

    // Ajouter le logo de l'entreprise
    const logo = new Image();
    logo.src = '../../../assets/images/jeep.jpeg';
    doc.addImage(logo, 'PNG', 15, 10, 30, 20);

    // Définir le titre de la facture
    doc.setFontSize(20);
    doc.text('Facture de Location de Voiture', 105, 15, { align: 'center' });

    // Ajouter les informations de l'entreprise
    doc.setFontSize(12);
    doc.text('CARDEAL', 105, 25, { align: 'center' });
    doc.text('123 Rue Mohamed 6', 105, 35, { align: 'center' });
    doc.text('Martil, Tetouan', 105, 45, { align: 'center' });
    doc.text('Tél: +1234567890', 105, 55, { align: 'center' });

    // Ajouter des bordures pour les informations de l'entreprise
    doc.setLineWidth(0.5);
    doc.line(15, 65, 195, 65);

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
    let yPos = 75;

    // Ajouter une image de voiture
    const img = new Image();
    img.src = `../../../assets/images/${data.image}`;
    doc.addImage(img, 'JPEG', 15, yPos, 60, 60);

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
    doc.setTextColor(255,86,26); // Noir

    // Ajouter le coût total
    yPos += 10;
    doc.text(`Total: ${data.totalCost} Dh`, 150, yPos);


    const signature = new Image();
signature.src = '../../../assets/images/signature.png';
doc.addImage(signature, 'PNG', 20, yPos + 20, 50, 25); // yPos + 20 pour les aligner sur la même ligne

  // Ajouter le cachet de l'entreprise
const stamp = new Image();
stamp.src = '../../../assets/images/cachet.jpeg';
doc.addImage(stamp, 'PNG', 120, yPos + 20, 30, 30);

// Ajouter une signature



    // Sauvegarder le PDF
    doc.save('Facture_Location_Voiture.pdf');
}



}
