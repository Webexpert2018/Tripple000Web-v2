import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ViewChild, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../core/services/auth.service';
import { LoginService } from '../../core/services/login.services';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  subscription: any;
  username = 'j Jackson'
  user: any;
  imageurl = './../assets/img/userimageurl.png'
  show:true;
  navbarOpen = false;
  constructor(private route: ActivatedRoute,
    private authservice: AuthenticationService,
    private loginservice: LoginService,
    private router: Router) {
    this.loginservice.LoggedInUserSubject.subscribe(user => {    
      if (user.avatarId != null || user.avatarId != '') {
        this.imageurl = "http://tzapi-dev.us-west-2.elasticbeanstalk.com/api/attachments/" + user.avatarId;
        this.username = user.firstName + " " + user.lastName;
      }
      ;
    });

  }
  private profilepic = ''
  private loginSub;

  ngOnInit() {
  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    const dom: any = document.querySelector('header');
    dom.classList.toggle(this.show);
  } 
  
  logoutUser = function () {
    // remove user from local storage to log user out
    this.authservice.logout();
    this.router.navigate(['/home']);
  }

  
    
}
