import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


import { CONFIG } from '../configs/config';

import { Vehicle } from '../models/Vehicle';

const vehiclesUrl = CONFIG.baseUrls.vehicles;

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getVehicles() {
    return this.http
      .get(vehiclesUrl)
      .pipe(map((data: any) => <Vehicle[]>data.data));
  }

  getVehicle(id: number) {
    return this.getVehicles().pipe(
      map(vehicles => vehicles.find(vehicle => vehicle.id === id))
    );
  }
}
