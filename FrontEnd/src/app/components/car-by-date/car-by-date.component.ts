import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-car-by-date',
  templateUrl: './car-by-date.component.html',
  styleUrls: ['./car-by-date.component.css'],
})
export class CarByDateComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
}
