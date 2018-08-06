import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { confirmEmailModel } from './models/confirm-email';

@Injectable({
    providedIn: 'root'
})

export class ConfirmEmailService {
    API_URL = environment.url;
    constructor(private httpClient: HttpClient) { }
    confirmUserEmail(cofirmModel : confirmEmailModel) {
        return this.httpClient.post(`${this.API_URL}/auth/confirmemail`,cofirmModel);
    }
}