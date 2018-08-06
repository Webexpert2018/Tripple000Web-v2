import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { registerUserModel, registerResponse, confirmEmail } from '../models/registerUserModel';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    })
};
@Injectable()
export class RegisterService {
    serviceUrl: string = environment.url;

    constructor(private http: HttpClient) { }

    private serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }

    registerUser(model: registerUserModel): Observable<any> {
        debugger;
        return this.http.post(this.serviceUrl + '/auth/register', this.serializeObj(model), httpOptions).pipe(tap(x => {
            if (x == null) {
                debugger;
                console.log("confirmemail successful.")
            }
            else console.log("confirmemail unsuccessful")
        }
        ));
    }

    confirmEmail(model: confirmEmail): Observable<any> {
        return this.http.post(this.serviceUrl + '/auth/confirmemail', model, httpOptions)
            .pipe(

                tap(x => {
                    if (x.HttpResponseMessage.StatusCode == 200) console.log("confirmemail successful.")
                    else console.log("confirmemail unsuccessful")
                }
                )
            );
    }
}