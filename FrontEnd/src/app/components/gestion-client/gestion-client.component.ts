import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/entities/client';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css'],
})
export class GestionClientComponent implements OnInit {
  clients?: Client[];
  showEditForm: boolean = false;
  selectedId?: string;
  // Ajoutez une référence au modal
  modal: any;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private httpClient: HttpClient,
    private elRef: ElementRef // Ajoutez ceci
  ) {}
  editForm = this.fb.group({
    id: [''],
    email: ['', [Validators.required, Validators.email]],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    cin: ['', Validators.required],
    phone: ['', Validators.required],

  });
  ngOnInit(): void {
     // Récupérez la référence au modal
     this.modal = this.elRef.nativeElement.querySelector('#myModal');
    this.getAllClient();
  }

 
  openModal() {
    this.modal.style.display = "block";
  }

  // Méthode pour fermer le modal
  closeModal() {
    this.modal.style.display = "none";
  }

  getAllClient(): void {
    this.clientService.getAllClient().subscribe((clients) => {
      this.clients = clients;
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

  onDelete(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this client!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.deleteClient(id).subscribe((response) => {
          console.log(response);
          this.getAllClient();
          Swal.fire(
            'Deleted!',
            'Client has been deleted.',
            'success'
          );
        });
      }
    });
  }

  onSubmit() {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }

    const email = this.editForm.value.email!;
    const cin = this.editForm.value.cin!;

    this.clientService.checkEmailExists(email).subscribe((emailExists) => {
      if (emailExists) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Email already exists',
          showConfirmButton: false,
          timer: 1500
        });
        return;
      } else {
        this.clientService.checkCinExists(cin).subscribe((cinExists) => {
          if (cinExists) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'CIN already exists',
              showConfirmButton: false,
              timer: 1500
            });
            return;
          } else {
            let client = new Client();
            client.email = email;
            client.firstName = this.editForm.value.firstname!;
            client.lastName = this.editForm.value.lastname!;
            client.phoneNumber = this.editForm.value.phone!;
            client.cin = cin;

            this.clientService.add(client).pipe(
              catchError((error: HttpErrorResponse) => {
                console.error('HTTP Error:', error.status, error.statusText);
                if (error.status === 500) {
                  Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Internal server error',
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
                return throwError('Something went wrong. Please try again later.');
              })
            ).subscribe((response) => {
              if (response && response.id) {
                // Affichage d'une popup de succès avec SweetAlert
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Client added successfully',
                  showConfirmButton: false,
                  timer: 1500
                });

                // Réinitialisation du formulaire
                this.editForm.reset();

                // Fermeture du formulaire
                this.showEditForm = false;

                // Actualisation de la liste des clients
                this.getAllClient();
              }
            });
          }
        });
      }
    });
  }

  get email() {
    return this.editForm.get('email');
  }
  get firstname() {
    return this.editForm.get('firstname');
  }
  get lastname() {
    return this.editForm.get('lastname');
  }
  get phone() {
    return this.editForm.get('phone');
  }
  get cin() {
    return this.editForm.get('cin');
  }
  toggleEditForm() {
    this.showEditForm = true;
  }
}
