import { Component, OnInit, NgModule, OnChanges, Input, Output, EventEmitter,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ViewChild, ViewChildren, ViewEncapsulation, QueryList } from '@angular/core';
import { LocationsService } from '../../core/services/locations.service';
import { ToastrService } from 'ngx-toastr';
import { APIService } from '../../core/services/locationapi';
import { DataService } from '../../core/services/data.service';
import { Subscription } from 'rxjs/Subscription';
import { locationObject } from '../../core';
import { AlertService } from '../../shared/alert/alert.service';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MouseEvent,GoogleMapsAPIWrapper  } from '@agm/core';
import { } from '@types/googlemaps';
@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddlocationComponent implements OnInit, OnChanges,OnDestroy {
  
  @Input() editid
  @Output() closepopupChange = new EventEmitter();



  @ViewChild('taskForm') myForm: NgForm;
  model: any = {};
  updateModel = new locationObject;
  error: string;
  success: string;
  loading = false;
  address: string = "";
  lat: any;
  lng: any;
  saveMode = true;
  placeid: string = "";
  name: string = "";
  subscription: Subscription;
  dataPassed: any;
  addeditlocationmessage = "Add New Location";
  enableDelete = false;
  mapzoomlevel = 17;
  public userSettings3: any = {
    showRecentSearch: false,
    inputPlaceholderText: 'Enter New  Area',

  };
  constructor(private AddlocationService: LocationsService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private locationservice: APIService,
    private ds: DataService,
    private alertService: AlertService,
    private spinner: NgxSpinnerService,
  ) {
    this.userSettings3['inputPlaceholderText'] = 'Enter New  Area';
    this.userSettings3 = Object.assign({}, this.userSettings3);
  }

  ngOnInit() {
     this.userSettings3['showRecentSearch'] = false,
     this.userSettings3['showSearchButton'] = false,
     this.userSettings3['inputString'] = 'Enter New  Area';
     this.userSettings3['inputPlaceholderText'] = 'Enter New  Area';
     this.userSettings3 = Object.assign({}, this.userSettings3);
  }
  markerDragEnd($event: MouseEvent) {
    this.spinner.show();   
    let geocoder = new google.maps.Geocoder();
   // let latlng = new google.maps.LatLng($event.coords.lat,$event.coords.lng);
    var latlng = {lat: $event.coords.lat, lng: $event.coords.lng};
    geocoder.geocode({'location': latlng}, (results, status) => {     //<<<===removed function keyword and added arrowfunction
                          if (status == google.maps.GeocoderStatus.OK) {                           
                            if (results[0] != null) { 
                              this.spinner.hide();
                              this.address =   results[0].formatted_address;
                              this.placeid =  results[0].place_id;
                              this.lat = $event.coords.lat;
                              this.lng =  $event.coords.lng;
                              this.userSettings3['geoLocation'] = [this.lat, this.lng];
                              this.userSettings3['inputString'] = this.address;
                              this.userSettings3 = Object.assign({}, this.userSettings3);  
                              
                            }
                              else {
                                this.spinner.hide();
                              alert("No address available");
                              this.address =  this.model.address;
                              this.placeid = this.model.placid;
                              this.lat = this.model.latitude;
                              this.lng =  this.model.longitude;
                              this.userSettings3['geoLocation'] = [this.lat, this.lng];
                              this.userSettings3['inputString'] = this.address;
                              this.userSettings3 = Object.assign({}, this.userSettings3)
                             
                            }
                          }
      });
  }
  // mapDragEnd($event:MouseEvent) {
  //  debugger; 
  //   // this.circleLat = event.coords.lat;
  //   // this.circleLng = event.coords.lng;
  // }
  autoCompleteCallback1(selectedData: any) {
     
    if (selectedData.response) {
      this.address = selectedData.data.formatted_address;
      this.placeid = selectedData.data.place_id;
      this.lat = selectedData.data.geometry.location.lat;
      this.lng = selectedData.data.geometry.location.lng;
    }
    else{
      if(selectedData.response==false && selectedData.reason=="No user input")
        {       
        this.address =  this.model.address;
        this.placeid = this.model.placid;
        this.lat = this.model.latitude;
        this.lng =  this.model.longitude;
        this.userSettings3['geoLocation'] = [this.lat, this.lng];
        this.userSettings3['inputString'] = this.address;
        this.userSettings3 = Object.assign({}, this.userSettings3);  
      }    
    }    

  }

  onSearchChange(searchValue : string ) {    
    if(searchValue ==null||searchValue.length==0)
    {      
      this.address =  this.model.address;
      this.placeid = this.model.placid;
      this.lat = this.model.latitude;
      this.lng =  this.model.longitude;      
      this.userSettings3['inputString'] = this.address;
      this.userSettings3 = Object.assign({}, this.userSettings3);  
      this.userSettings3['geoLocation'] = [this.lat, this.lng];
    }
    
  }
  saveLocation(): void {
    this.spinner.show();
    this.loading = true;
    this.model.address = this.address;
    this.model.longitude = this.lng;
    this.model.latitude = this.lat;
    this.model.placid = this.placeid;
    this.locationservice.createlocation(this.model).subscribe(
      x => {
        this.success = "Location addedd successfully";
        this.toastr.success("Location addedd successfully", 'Success');
        this.userSettings3['inputPlaceholderText'] = 'Enter New  Area';
        this.userSettings3 = Object.assign({}, this.userSettings3);        
        this.closepopupChanged();
      },
      error => {
        this.error = error.statusText;
        this.loading = false;
        this.spinner.hide();
        this.toastr.error("Error Occured " + error.statusText, 'Error');
      });
  }
  cancelFields(): void {
    this.addeditlocationmessage = "Add New Location";
    this.enableDelete = false;
    this.saveMode = true;
    this.model.address = '';
    this.model.longitude = '';
    this.model.latitude = '';
    this.model.placid = '';
    this.model.name = '';
    this.address = '';
    this.placeid = '';
    this.name = '';
    this.lat = 0;
    this.lng = 0;   
    this.userSettings3['inputPlaceholderText'] = 'Enter New  Area';
    this.userSettings3 = Object.assign({}, this.userSettings3);
  }

  checkIfEditMode(): void {    
    if (this.editid) {
      this.locationservice.getCurrentLocation(this.editid).subscribe((data: locationObject) => {
      
        this.addeditlocationmessage = "Edit current location";
        this.enableDelete = true;
        this.saveMode = false; this.loading = false;
        this.updateModel = data;
        this.updateModel.id = data.id;
        this.updateModel.userId = data.userId;
        this.name = data.name;
        this.address = data.addressDisplay;
        this.placeid = data.addressPlace;
        this.lat = data.x;
        this.lng = data.y;
        this.model.locationName = this.updateModel.name;
        this.model.AddressDisplay = this.updateModel.addressDisplay;
        this.model.address = this.updateModel.addressDisplay;
        this.model.latitude =  data.x;
        this.model.longitude = data.y;
        this.model.placid = data.addressPlace;
        
        this.userSettings3['geoLocation'] = [this.lat, this.lng];
        this.userSettings3['inputString'] = data.addressDisplay;
        //this.userSettings3['inputPlaceholderText'] = 'Enter New  Area';
        this.userSettings3 = Object.assign({}, this.userSettings3);
        this.spinner.hide()
      },
        error => {

          this.toastr.error("Error Occured " + error.statusText, 'Error');
          this.spinner.hide()
        });
    } else {
      this.cancelFields();
    }
  }

  deleteLocation(locationName): void {
    if (this.editid) {
      let that = this;
      that.alertService.confirmThis("Are you sure to delete " + locationName + "?", function () {
        that.deleteCurrentLocation()
      }, function () {
      });
    }
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();    
  }

  ngOnChanges() {       
     this.userSettings3['inputString'] = 'Enter New  Area';
     this.userSettings3['inputPlaceholderText'] = 'Enter New  Area';
     this.userSettings3 = Object.assign({}, this.userSettings3);    
     this.checkIfEditMode();
  }

  deleteCurrentLocation(): void {
    this.locationservice.deleteCurrentLocation(this.editid).subscribe(
      x => {
        this.toastr.success("Location deleted successfully", 'Success');
        this.closepopupChanged();
      },
      error => {
        this.toastr.error("Error Occured " + error.statusText, 'Error');
      });
  }

  updateLocation(): void {
  
    this.spinner.show();
    this.loading = true;
    this.updateModel.addressDisplay = this.address;
    this.updateModel.x = this.lat;
    this.updateModel.y = this.lng;
    this.updateModel.addressPlace = this.placeid;
    this.updateModel.name = this.name;
    this.locationservice.updateLocation(this.updateModel).subscribe(
      x => {
        this.success = "Location updated successfully";
        this.toastr.success("Location updated successfully", 'Success');
        this.userSettings3['inputPlaceholderText'] = 'Enter New  Area';
        this.userSettings3 = Object.assign({}, this.userSettings3);
        this.spinner.hide();
        this.closepopupChanged();
      },
      error => {
        this.error = error.statusText;
        this.loading = false;
        this.spinner.hide();
        this.toastr.error("Error Occured " + error.statusText, 'Error');
      });
  }
  cancelpopupchanges() {
    if (this.editid) {
      this.name = this.updateModel.name;
      this.model.locationName = this.updateModel.name;
      this.model.AddressDisplay = this.updateModel.addressDisplay;
      this.address = this.updateModel.addressDisplay;
      this.placeid = this.updateModel.addressPlace;
      this.lat = this.updateModel.x;
      this.lng = this.updateModel.y;
      //this.userSettings3['geoLocation'] =[this.lat,this.lng];
      this.userSettings3['inputString'] = this.updateModel.addressDisplay;
      this.userSettings3['geoLocation'] = [this.lat, this.lng];
      //this.userSettings3['inputPlaceholderText'] = 'Enter New  Area';
      this.userSettings3 = Object.assign({}, this.userSettings3);
      this.closepopupChange.emit({ closepoup: true });
    }
    else {
      this.cancelFields();      
      this.closepopupChange.emit({ closepoup: true });
    }
  }
  closepopupChanged() { 
    this.spinner.show();
    this.cancelFields();      
    this.closepopupChange.emit({ closepoup: true });

  }
}
