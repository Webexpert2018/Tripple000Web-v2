import { Component, OnInit, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { locationModel } from '../../core/models/locationModel';
import { ViewChild, ViewEncapsulation } from '@angular/core';
import { LocationsService } from '../../core/services/locations.service';
import { APIService } from '../../core/services/locationapi';
import { DataService } from '../../core/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-locationlist',
  templateUrl: './locationlist.component.html',
  styleUrls: ['./locationlist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LocationlistComponent implements OnInit {
  locationsdata: locationModel[];
  showdialogbox = false;
  objectVal = new locationModel();
  editid: any;
  mapzoomlevel = 17;

  constructor(private locationService: LocationsService, private apiService: APIService, private ds: DataService,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit() {  
    this.getUserLocations();   
  }

  getUserLocations= function () {     
      this.spinner.show(); 
      this.locationsdata = [];
      this.apiService.getUserLocations().subscribe((data: Array<locationModel>) => {
      this.locationsdata = data;
      this.spinner.hide();
    });
  }

  showDialogbox = function () {
    this.editid = null;
    this.showdialogbox = !this.showdialogbox;
  }

  reloadList(): void {  
    this.spinner.show();  
    this.editid =null;
    this.getUserLocations();
  }
  
  editlocation = function (currentitemId) {   
    this.spinner.show(); 
    this.ds.sendData(currentitemId);
    this.showdialogbox = !this.showdialogbox;
    this.editid = currentitemId;
  }
  
  changedialogValue(event){  
    if([event.closepoup]){     
      this.showdialogbox = !this.showdialogbox;
      this.reloadList();
    }
  }
}
