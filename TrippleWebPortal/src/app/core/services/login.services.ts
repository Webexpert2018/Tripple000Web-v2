import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { loginRequestModel } from '../models/registerUserModel';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
@Injectable()
export class LoginService {
    serviceUrl: string = environment.url;
    authurl: string = this.serviceUrl + "/auth/token";
    public LoggedInUserSubject: BehaviorSubject<any>;
    constructor(private http: HttpClient) {
        this.LoggedInUserSubject = new BehaviorSubject(this.checkIsLoggedIn());
     }

    private serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }
    get loggedInObservable() {       
        return this.LoggedInUserSubject.asObservable();
    }
    login(username: string, password: string) {
        return this.http.post<any>(this.authurl, { email: username, password: password, grant_type: "password", client_id: "webApp" })
            .pipe(map((res: any) => {
                // login successful if there's a jwt token in the response
                if (res && res.access_token) {
                    console.log(res.accessToken);
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username, access_token: res.access_token }));
                    this.LoggedInUserSubject.next(this.checkIsLoggedIn());
                }
            }));
    }
    getUserDetails() {
        return this.http.get(`${this.serviceUrl}/user/`).pipe(map((res: any) => {
            // login successful if there's a jwt token in the response
            if (res) {
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUserId', res.id);  
                localStorage.setItem('User', JSON.stringify(res));             
                this.LoggedInUserSubject.next(this.checkIsLoggedIn());
            }
        }));
    }
    checkIsLoggedIn() {       
        let user:any;
        let localStorageobject = JSON.parse(localStorage.getItem('User'));
        if (localStorageobject != null) {
             user = JSON.parse(localStorage.User);
            // if (user.avatarId!= null || user.avatarId != '') {              
            //     user = "http://tzapi-dev.us-west-2.elasticbeanstalk.com/api/attachments/" + user.avatarId;
            // }
        }       
        return user;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}