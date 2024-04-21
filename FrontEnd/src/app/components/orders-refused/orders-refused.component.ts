import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/entities/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders-refused',
  templateUrl: './orders-refused.component.html',
  styleUrls: ['./orders-refused.component.css']
})
export class OrdersRefusedComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
}
