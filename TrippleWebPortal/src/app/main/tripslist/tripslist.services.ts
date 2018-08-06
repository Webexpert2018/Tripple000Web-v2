import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';
import { async } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { trips } from './models/trips';


@Injectable({
    providedIn: 'root'
})
export class TripService {
    API_URL = environment.url;   
    constructor(public httpClient :HttpClient) { }
    getTrips(){
        return this.httpClient.get(`${this.API_URL}/tracks/`);        
    }
  
}


