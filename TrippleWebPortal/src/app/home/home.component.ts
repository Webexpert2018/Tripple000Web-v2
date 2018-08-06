import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class HomeComponent implements OnInit {
  showLoginDialog = false;
  showRegisterDialog = false;
  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.checkForLoggeinUser();
  }

  showLoginDialogbox = function(){
    this.showLoginDialog = !this.showLoginDialog;
  }

  showRegisterDialogbox = function(){
    this.showRegisterDialog = !this.showRegisterDialog
  }

  checkForLoggeinUser(){    
    let localStorageobject = JSON.parse(localStorage.getItem('currentUser'));
    if(localStorageobject != null){
      // this.router.navigate(['/dashboard']);
    }
   
  }
}
