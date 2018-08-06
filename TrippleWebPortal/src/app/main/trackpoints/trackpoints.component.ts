import { Component, OnInit, NgZone, Input, OnChanges, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SosSignalsService } from '../sossignals/sossignals.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewChild, ViewChildren, ViewEncapsulation, QueryList } from '@angular/core';
import { trackpointsModel } from '../../core/models/trackpointsModel';
import { promise } from 'selenium-webdriver';
import { Observable } from 'rxjs';
import { observable } from 'rxjs/internal/symbol/observable';
import { catchError, map, tap } from 'rxjs/operators';
import { MouseEvent, GoogleMapsAPIWrapper } from '@agm/core';
import { } from '@types/googlemaps';
@Component({
  selector: 'app-trackpoints',
  templateUrl: './trackpoints.component.html',
  styleUrls: ['./trackpoints.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrackpointsComponent implements OnInit, OnChanges {
  @Input() etrackpoints
  @Output() closepopupChange = new EventEmitter();
  trackpoints: trackpointsModel[];

  constructor(private sosSignalsService: SosSignalsService,
    private activeRoute: ActivatedRoute,
    private _zone: NgZone
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.etrackpoints);
    //sthis.someFunction();
  }
  closepopupChanged() {
    //  this.closepopupChange.emit({ etrackpoints: null });
  }

  onGeocodeComplete(address) {
    return address;
  }
  onGeocodeError(error) {
    return "Error";
  }






}
