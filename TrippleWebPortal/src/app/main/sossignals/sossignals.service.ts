import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { } from '@types/googlemaps';
@Injectable()
export class SosSignalsService {
    API_URL = environment.url;
    constructor(public httpClient :HttpClient) { }
    getTripsDetail(id){       
        return this.httpClient.get(`${this.API_URL}/tracks/`+id);        
    }
    getTripsTrackPointsDetail(id){       
        return this.httpClient.get(`${this.API_URL}/trackpoints/trackid/`+id);        
    }
    getGeoCodeAddress(latlng) {   
      var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': latlng }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0] != null) {
            return results[0].formatted_address.toString();
            }
        }
        else {
            return "";
        }
    });

    
  }

  getRevGeoLocation(lat: number, lng: number): Observable<google.maps.GeocoderResult> {
    if (navigator.geolocation) {
        let geocoder = new google.maps.Geocoder();
        let latlng = new google.maps.LatLng(lat, lng);
        return Observable.create(observer => {
            geocoder.geocode({ 'location': latlng }, (results, status) => {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log(results[0]);
                    observer.next(results[0])
                    observer.complete();
                } else {
                    console.log('Error: ', results, ' & Status: ', status);
                    observer.error();
                }
            });
        });
    }
}
  
}