import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthenticationService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getToken()["access_token"]}`
        }
      });
    }
    return next.handle(request);
  }
}


// import 'rxjs/add/operator/map';

// import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { AuthenticationService } from './auth.service';
// import { Configuration } from '../models/app.constants';

// @Injectable()
// export class DataService {

//     private actionUrl: string;

//     constructor(private http: HttpClient, private _configuration: Configuration,private auth: AuthenticationService) {
//         this.actionUrl = _configuration.ServerWithApiUrl + 'values/';
//     }

//     public getAll<T>(): Observable<T> {
//         return this.http.get<T>(this.actionUrl);
//     }

//     public getSingle<T>(id: number): Observable<T> {
//         return this.http.get<T>(this.actionUrl + id);
//     }

//     public add<T>(itemName: string): Observable<T> {
//         const toAdd = JSON.stringify({ ItemName: itemName });

//         return this.http.post<T>(this.actionUrl, toAdd);
//     }

//     public update<T>(id: number, itemToUpdate: any): Observable<T> {
//         return this.http
//             .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
//     }

//     public delete<T>(id: number): Observable<T> {
//         return this.http.delete<T>(this.actionUrl + id);
//     }
// }


// @Injectable()
// export class CustomInterceptor implements HttpInterceptor {

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         if (!req.headers.has('Content-Type')) {
//             req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
//         }

//         req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
//         req = req.clone({
//                 setHeaders: {
//                  Authorization: `Bearer ${this.auth.getToken()}`
//                 } 
//               });
//         console.log(JSON.stringify(req.headers));
//         return next.handle(req);
//     }
// }