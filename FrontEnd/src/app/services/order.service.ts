import { Injectable } from '@angular/core';
import { Order } from '../entities/order';
import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }


  private orderUrl='http://localhost:8080/order/findAllOrdersInHold';
 
  private actionOrder='http://localhost:8080/order/updateState';
 
  
  private orderAcceptedUrl='http://localhost:8080/order/findAllOrdersAccepted';
 
  private orderRefusedUrl='http://localhost:8080/order/findAllOrdersRefused';

}
