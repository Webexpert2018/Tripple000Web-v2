import { Component, OnInit, HostBinding } from '@angular/core';
import { ViewChild, ViewEncapsulation } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SosSignalsService } from './sossignals.service';
import { tripModel } from '../../core/models/tripModel';
import { trackpointsModel } from '../../core/models/trackpointsModel';
import { OrderModule, OrderPipe } from 'ngx-order-pipe';
import { AgmCoreModule, MapsAPILoader, MouseEvent, GoogleMapsAPIWrapper } from '@agm/core';
import { } from '@types/googlemaps';
@Component({
  selector: 'app-sossignals',
  templateUrl: './sossignals.component.html',
  styleUrls: ['./sossignals.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SosSignalsComponent implements OnInit {
  model: any = {};
  etrackpoints: any;
  order: string = 'tptime';
  // lat: any;
  // lng: any;
  // initial center position for the map
  lat: number=0;
  lng: number=0;
  placeid: string;
  iconurl: string = "../../assets/img/indicator3.png";
  user: any;
  public polyline: Array<any>;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private sosSignalsService: SosSignalsService,
    private activeRoute: ActivatedRoute,
    private orderPipe: OrderPipe
  ) {
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.polypoints.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }

  markerDragEnd(m: point, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  polypoints: point[] = [
    {
      lat:
        -33.781858,
      lng:
        151.284982,
      label: 'A'
    },
    {
      lat:
        -33.781890,
      lng: 151.284982,
      label: 'B',

    },
    {
      lat:
        -33.780858,
      lng:
        151.283982,
      label: 'C',
    }
  ]

  ngOnInit() {
    this.etrackpoints = null;
    this.user = JSON.parse(localStorage.User);
    this.sosSignalsService.getTripsDetail(this.activeRoute.snapshot.params['id']).subscribe(
      x => {
        this.model = x;
        this.placeid = this.model.addressPlace;
        //this.getLatLong(this.model.addressPlace);
        this.gettrackpoints(this.activeRoute.snapshot.params['id']);
      },
      error => {
        // this.error = error.statusText;
        // this.loading = false;
        // this.spinner.hide();
        // this.toastr.error("Error Occured " + error.statusText, 'Error');
      });
  }
  gettrackpoints(trackid) {
    this.sosSignalsService.getTripsTrackPointsDetail(trackid).subscribe((data: Array<trackpointsModel>) => {
      this.etrackpoints = data;
      if (this.etrackpoints != null && this.etrackpoints.length > 0) {       
        this.lat=this.etrackpoints[0].x;
        this.lng=this.etrackpoints[0].y;
        this.orderPipe.transform(this.etrackpoints, this.order)
        this.etrackpoints.forEach((value) => { // standard forEach
          var latlng = { lat: value.x, lng: value.y };
          this.geocodeAddressPromise(latlng).then((response) => {
            value.address = response;
          }, (error) => {
            value.address = "error";
          });
        });
      }

    },
      error => {
        // this.error = error.statusText;
        // this.loading = false;
        // this.spinner.hide();
        // this.toastr.error("Error Occured " + error.statusText, 'Error');
      });
  }

  geocodeAddressPromise(latlng) {
    return new Promise((resolve, reject) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        'location': latlng,
      }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          resolve({
            address: results[0].formatted_address.toString()
          });
        } else {
          reject('Cannot find address');
        }
      });
    });
  }
  errorHandler(event) {
    this.user.Imageurl = "../../assets/img/user.png";
  }
  // mapReady($event: any) {
  //       // here $event will be of type google.maps.Map 
  //   // and you can put your logic here to get lat lng for marker. I have just put a sample code. You can refactor it the way you want.
  //   this.getLatLong(this.placeid, $event, null);
  // }

  getLatLong(placeid: string) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'placeId': placeid }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0] != null) {
          this.lat = results[0].geometry.location.lat();
          this.lng = results[0].geometry.location.lng();
          // map.setCenter(results[0].geometry.location);
          // var marker = new google.maps.Marker({
          //   map: map,
          //   position: results[0].geometry.location
          // });
          // infowindow.setContent(results[0].formatted_address);
          // infowindow.open(map, marker);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }
}
// just an interface for type safety.
interface point {
  lat: number;
  lng: number;
  label?: string;

}

