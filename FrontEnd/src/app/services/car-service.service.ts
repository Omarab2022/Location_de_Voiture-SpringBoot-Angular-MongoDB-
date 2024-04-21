import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../entities/car';
import { Order } from '../entities/order';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  constructor(private http: HttpClient) { }

}