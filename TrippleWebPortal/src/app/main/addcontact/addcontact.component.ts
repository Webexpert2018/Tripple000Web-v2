import { Component, OnInit, NgModule, OnChanges, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ViewChild, ViewChildren, ViewEncapsulation, QueryList } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../core/services/data.service';
import { Subscription } from 'rxjs/Subscription';
import { contactModel } from '../../core/models/contactModel';
import { AlertService } from '../../shared/alert/alert.service';
import { AddContactService } from './addcontact.service';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddContactComponent implements OnInit, OnChanges, OnDestroy {
  @Input() editid
  @Output() closepopupChange = new EventEmitter();
  model: any = {};
  updateModel = new contactModel;
  saveMode = true;
  enableDelete = false;
  addeditusercontactmessage = "Add New Location";
  imageUrl=environment.imagesurl;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private AddContactService: AddContactService,
    private ds: DataService,
    private alertService: AlertService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }
  ngOnDestroy() {

  }

  ngOnChanges() {
    
    this.checkIfEditMode();
  }
  checkIfEditMode(): void {
    if (this.editid) {
       this.AddContactService.getUserContactdetails(this.editid).subscribe((data: contactModel) => {
      
        this.saveMode = false;
        this.model = data;
        this.model.firstname = data.name.split(' ')[0];
        this.model.lastname = data.name.substring(data.name.indexOf(' '));
        this.addeditusercontactmessage = "My Safety Circle "+this.model.firstname+" "+this.model.lastname;
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
  closepopupChanged() {
    this.spinner.show();
    this.cancelFields();
    this.closepopupChange.emit({ closepoup: true });

  }
  saveUserContact(): void {
    this.spinner.show();
    this.model.name = this.model.firstname + " " + this.model.lastname;
    this.AddContactService.saveContact(this.model).subscribe(
      x => {
        this.toastr.success("UserContact addedd successfully", 'Success');
        this.closepopupChanged();
      },
      error => {
        this.spinner.hide();
        this.toastr.error("Error Occured " + error.statusText, 'Error');
      });
  }

  handleFileInput(files: FileList) {
    if (this.model.id != '') {
      let file: File = files.item(0);
      let formData: FormData = new FormData();
      formData.append('file', file, file.name);
      this.AddContactService.uploadAvatar(formData, this.model.id).subscribe((data: contactModel) => {
        
        this.model = data;
        this.model.firstname = data.name.split(' ')[0];
        this.model.lastname = data.name.substring(data.name.indexOf(' '));       
        this.model.photoUrl = "http://tzapi-dev.us-west-2.elasticbeanstalk.com/api/attachments/" + data.photoId;
      },
        error => {
          this.toastr.error("Error Occured " + error.statusText, 'Error');
        });
    }
    else {
      this.toastr.error("Please save the user details", 'Error');
    }


  }
  UpdateUserContact(): void {    
    this.spinner.show();
    this.model.name = this.model.firstname + " " + this.model.lastname;
    this.AddContactService.updateContact(this.model).subscribe(
      x => {
        this.toastr.success("UserContact Updated successfully", 'Success');
        this.closepopupChanged();
      },
      error => {
        this.spinner.hide();
        this.toastr.error("Error Occured " + error.statusText, 'Error');
      });
  }
  errorHandler(event) {
    this.model.photoUrl = "../../assets/img/user.png";
  }
  cancelFields(): void {
    this.addeditusercontactmessage = "Add New Safety Circle";
    this.model.id = '';
    this.model.name = '';
    this.model.firstname = '';
    this.model.lastname = '';
    this.model.userid = '';
    this.model.phoneNo = '';
    this.model.email = '';
    this.model.contactUSerId = '';
    this.model.photoUrl = '';
    this.model.photoId = '';
    this.enableDelete = false;
    this.saveMode = true;


  }

  cancelpopupchanges() {
    if (this.editid) {

      this.closepopupChange.emit({ closepoup: true });
    }
    else {
      this.cancelFields();
      this.closepopupChange.emit({ closepoup: true });
    }
  }
}
