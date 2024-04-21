import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Order, Statu } from 'src/app/entities/order';
import { CarServiceService } from 'src/app/services/car-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-car-detai',
  templateUrl: './car-detai.component.html',
  styleUrls: ['./car-detai.component.css']
})
export class CarDetaiComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
