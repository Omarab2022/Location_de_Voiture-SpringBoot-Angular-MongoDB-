import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }
  private adminUrl='http://localhost:8080/manager/findAllAdmins';


  private userUrl='http://localhost:8080/manager/findAllUsers';
 
  

  private deleteUrl='http://localhost:8080/manager/deleteUser';


  private emailGetUrl='http://localhost:8080/manager/checkEmailExist';


  private updateUrl='http://localhost:8080/manager/updateUser';
  

  private addUrl='http://localhost:8080/manager/addUser';
 

}
