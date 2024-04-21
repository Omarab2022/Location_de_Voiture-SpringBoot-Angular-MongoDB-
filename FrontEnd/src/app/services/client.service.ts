import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../entities/client';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }
  private baseUrl='http://localhost:8080/client/findAllClients';
  
 
  private deleteUrl='http://localhost:8080/client/deleteClient';


  private updateUrl='http://localhost:8080/client/updateClient';
  

  private addUrl='http://localhost:8080/client/addClient';
 

  private emailGetUrl='http://localhost:8080/client/checkEmailExist';
 

  private cinGetUrl='http://localhost:8080/client/checkCinExist';
 

  private clientGetUrl='http://localhost:8080/client/findClientById';
 

  
}
