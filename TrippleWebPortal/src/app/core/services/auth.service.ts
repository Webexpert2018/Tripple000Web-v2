import { Injectable  } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, throttle } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }
    private apiURL = environment.url;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private authenticateServiceUrl = this.apiURL + 'auth/token'; 

    login(username: string, password: string)   : Observable <any>  {
        let opts = new RequestOptions();
        opts.headers = this.headers;

        return this.http.post(this.authenticateServiceUrl, JSON.stringify({ email: username, username: username, password: password }), opts)
            .pipe(
                map(
                    (response: Response) => 
                    {
                        let user = response.json();
                        if (user && user.accessToken) {
                            localStorage.setItem('currentUser', JSON.stringify(user));
                        }
                        else {
                            localStorage.removeItem('currentUser');
                        }
                    }
                )
            );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    public getToken(): string {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
    
}