
import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { contactModel } from '../../core/models/ContactModel';

@Injectable()
export class MyCircleService {    
    
    API_URL = environment.url;
    getusercontacts = environment.url + "/UserConatcts/userid/";
    constructor(private httpClient: HttpClient) { 
    }
    getUserContacts() {
        return this.httpClient.get(`${this.API_URL}/UserContacts/`);
    }
   
}