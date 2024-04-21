import { OrdersAcceptedComponent } from './../orders-accepted/orders-accepted.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart,registerables } from 'node_modules/chart.js';
import { Order } from 'src/app/entities/order';
import { OrderService } from 'src/app/services/order.service';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
