import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { Router } from "@angular/router";
import { ViewChild, ViewEncapsulation } from '@angular/core';
import { trips } from './models/trips';
import { TripService } from './tripslist.services';
import * as moment from 'moment'; // add this 1 of 4
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-trips',
  templateUrl: './tripslist.component.html',
  styleUrls: ['./tripslist.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TripsListComponent implements OnInit {
  tripdata: trips[];
  monthNames: string[];
  showdialogbox: false;
  constructor(private tripService: TripService, private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit() {
    this.monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    this.getTrips();
  }

  getTrips(): any {
    this.spinner.show();
    this.tripService.getTrips().subscribe((data: Array<trips>) => {
      this.tripdata = data;
      this.spinner.hide();
    });
  }
  showDialogbox = function () {
    //this.editid = null;
    this.showdialogbox = !this.showdialogbox;
  }

  calculateArrivalStatus(startdate, enddate) {
   
    //define moments for the startdate and enddate
    var startdateMoment = moment(startdate);
    var enddateMoment = moment(enddate);

    if (startdateMoment.isValid() === true && enddateMoment.isValid() === true) {

      var minutes = enddateMoment.diff(startdateMoment, 'minutes')
      //Similar to days go the previous day 
      startdateMoment.add(minutes, 'minutes')

      if (minutes > 0) {
        return "Arrived on the time<br/>Delayed " + minutes + " mins";
      }
      else {
        return "Not Arrived";
      }

    }
    else {
      return undefined;
    }

  }

  RedirectToSos(id) {
    this.router.navigate(['./main/sossignals', id]);

  }

}
