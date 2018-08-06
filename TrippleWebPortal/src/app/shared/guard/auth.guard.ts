import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private route: ActivatedRoute) { }

    canActivate() {
        // return true;
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    }
}
