
import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User, PasswordModel } from './models/myprofileModel';

@Injectable()
export class MyProfileService {
    API_URL = environment.url;
    constructor(private httpClient: HttpClient) {
    }
    getUserdetails() {
        return this.httpClient.get(`${this.API_URL}/user/`);
        //     return this.httpClient.get(`${this.API_URL}/locations/`);
        //    .pipe(map(res => res));   
    }
    uploadAvatar(formData) {
        return this.httpClient.post(`${this.API_URL}/user/updateAvatar`, formData);
    }
    updateProfile(updatemodel: User) {

        return this.httpClient.put(`${this.API_URL}/user`, {
            id: updatemodel.id,
            firstName: updatemodel.firstName,
            lastName: updatemodel.lastName,
            email: updatemodel.email,
            avatarUrl: updatemodel.avatarUrl,
            phoneNumber: updatemodel.phoneNumber,
            gender: "male",
            dob: updatemodel.dob,
            avatarId:updatemodel.avatarId          


        });
    }
    updatePassword(pwdmodel: PasswordModel) {
        return this.httpClient.put(`${this.API_URL}/user/updatePassword`, {
            OldPassword: pwdmodel.oldPassword,
            NewPassword: pwdmodel.newPassword
        });
    }
    updateEMPassword(pwdmodel: PasswordModel) {
        return this.httpClient.put(`${this.API_URL}/user/updateEMPassword`, {
            EMPassword: pwdmodel.oldPassword,
            EMPasswordHint: pwdmodel.newPassword
        });
    }
}