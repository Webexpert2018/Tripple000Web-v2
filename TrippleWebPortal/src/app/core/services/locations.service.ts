import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { locationModel, locationObject } from '../models/locationModel';

@Injectable({
    providedIn: 'root'
})

export class LocationsService {
    headers: HttpHeaders;
    response: string;
    serviceUrl: string = environment.url;
    createlocationurl = environment.url + "/locations";
    getuserlocations = environment.url + "/locations/userid/";
    access_token: string;
    user_id=localStorage.getItem("currentUserId");
    constructor(private http: HttpClient) { }

    getLocations(): any {
         var locations = new Array<locationObject>();
         debugger;
        // // locations.push({ "locationName": "Turquoise Chandigarh", "address": "29/7, Industrial & Business Park Phase 2, Near Tribune Chowk, Chandigarh, 160002", "longitude": 76.790987, "latitude": 30.701972 });
        // // locations.push({ "locationName": "Hotel Emerald Chandigarh", "address": "SCO 173-74-77-78, Madhya Marg, Sector 8C, Chandigarh, 160008", "longitude": 76.796231, "latitude": 30.736002 });
        return this.http.get<any>(this.getuserlocations + this.user_id).pipe(map((res: any) => {
            debugger;
            if (res) {
                console.log(res);
                locations = res;
                console.log(locations);
            }
        }));
    }

    
    createlocation(model: locationModel) {
        debugger;
        const expandedHeaders = this.prepareHeader();
        return this.http.post<any>(this.createlocationurl, {
            Id: "00000000-0000-0000-0000-000000000000",
            Name: model.locationName,
            AddressDisplay: model.address,
            AddressPlace: model.address,
            X: model.latitude,
            Y: model.longitude
        }).pipe(map((res: any) => {
            debugger;
            if (res) {
                
            }
        }));
    }


    

    private prepareHeader(): object {
        this.access_token = JSON.parse(localStorage.getItem('currentUser'))["access_token"];
        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Authorization', 'Bearer ' + this.access_token);
        return {
            headers: this.headers
        }
    }

}