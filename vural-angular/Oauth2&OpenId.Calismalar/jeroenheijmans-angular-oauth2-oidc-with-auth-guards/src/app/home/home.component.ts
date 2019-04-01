import { Component, OnInit } from '@angular/core';

// Service ekle
import { DataService } from '../services/data.service';
import { VehicleService } from '../services/vehicle.service';

// Model ekle
import { Ticker } from '../models/Ticker';
import { Vehicle } from '../models/Vehicle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  data: Ticker[] = [];
  vehicles: Vehicle[];
  loginFailed: boolean = false;
  userProfile: object;


  isLoadingResults = true;

  constructor(private api: DataService, private vehicleService: VehicleService) {
    
  }

  ngOnInit() {
    this.vehicles = [];
    // this.allArticles$ = this.api.getTicker2();
    // console.log(this.allArticles$.source);

    this.vehicleService.getVehicles().subscribe(vehicles => (this.vehicles = vehicles));

    this.isLoadingResults = false;
    this.api.getTicker()
      .subscribe(response => {
        this.data = response;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
