
import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { contactModel } from '../../core/models/contactModel';

@Injectable({
    providedIn: 'root'
})
export class AddContactService {    
    API_URL = environment.url;
    Userid=localStorage.getItem("currentUserId");
    constructor(private httpClient: HttpClient) { 
    }
    getUserContactdetails(id) { 
        return this.httpClient.get(`${this.API_URL}/usercontacts/`+id);
    //     return this.httpClient.get(`${this.API_URL}/locations/`);
    //    .pipe(map(res => res));   
    }
    saveContact(savemodel: contactModel) {       
        return this.httpClient.post(`${this.API_URL}/usercontacts`,{            
            id: "00000000-0000-0000-0000-000000000000",
            name: savemodel.name,
            email:  savemodel.email,
            phoneNo:savemodel.phoneNo,
            userId: this.Userid,
            contactUserId: null,
            photoUrl: savemodel.photoUrl,
            photoId:savemodel.photoId
            
        });
    }
    uploadAvatar(formData,UserContactid) {
        return this.httpClient.post(`${this.API_URL}/usercontacts/`+UserContactid +`/updateAvatar`, formData);
    }
    updateContact(updatemodel: contactModel) {    
        debugger;   
        return this.httpClient.put(`${this.API_URL}/usercontacts/`+ updatemodel.id,{           
            name: updatemodel.name,
            email:  updatemodel.email,
            phoneNo:updatemodel.phoneNo,
            userId: this.Userid,
            contactUserId: null,
            photoUrl: updatemodel.photoUrl,
            photoId:updatemodel.photoId            
        });
    }
   
    
}