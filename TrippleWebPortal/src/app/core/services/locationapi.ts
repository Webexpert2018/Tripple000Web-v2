import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { locationModel, locationObject } from '../models/locationModel';

@Injectable({
    providedIn: 'root'
})

export class APIService {
    API_URL = environment.url;
    constructor(private httpClient: HttpClient) { }
    getUserLocations() {
        return this.httpClient.get(`${this.API_URL}/locations/`);
    }
    getCurrentLocation(locationId) {
        return this.httpClient.get(`${this.API_URL}/locations/`+locationId);
    }
    getlatlng(latlng){
        return this.httpClient.get("http://maps.googleapis.com/maps/api/geocode/json?latlng="+latlng+"&sensor=true")         
    }
    createlocation(model: locationModel) {
        return this.httpClient.post(`${this.API_URL}/locations/`,{
            Id: "00000000-0000-0000-0000-000000000000",
            Name: model.locationName,
            AddressDisplay: model.address,
            AddressPlace: model.address,
            X: model.latitude,
            Y: model.longitude
        });
    }
    updateLocation(updatemodel: locationObject) {       
        return this.httpClient.put(`${this.API_URL}/locations/`+ updatemodel.id,{
            Id: updatemodel.id,
            UserId: updatemodel.userId,
            Name: updatemodel.name,
            AddressDisplay: updatemodel.addressDisplay,
            AddressPlace: updatemodel.addressPlace,
            X: updatemodel.x,
            Y: updatemodel.y
        });
    }
    deleteCurrentLocation(locationId) {
        return this.httpClient.delete(`${this.API_URL}/locations/`+locationId);
    }
}