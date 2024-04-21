import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (password?.value !== confirmPassword?.value) {
    return { 'passwordMismatch': true };
  }
  return null;
}
@Component({
  selector: 'app-form-edit-user',
  templateUrl: './form-edit-user.component.html',
  styleUrls: ['./form-edit-user.component.css']
})
export class FormEditUserComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  
}
