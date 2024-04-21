import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/entities/car';
import { Client } from 'src/app/entities/client';
import { Order } from 'src/app/entities/order';
import { User } from 'src/app/entities/user';
import { AdminService } from 'src/app/services/admin.service';
import { CarServiceService } from 'src/app/services/car-service.service';
import { ClientService } from 'src/app/services/client.service';
import { OrderService } from 'src/app/services/order.service';
import {Chart,registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}