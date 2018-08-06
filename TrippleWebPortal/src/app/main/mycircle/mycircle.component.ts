import { Component, OnInit, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ViewChild, ViewEncapsulation } from '@angular/core';
import { contactModel } from '../../core/models/ContactModel';
import { MyCircleService } from '../mycircle/mycircle.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../../core/services/data.service'
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-mycircle',
  templateUrl: './mycircle.component.html',
  styleUrls: ['./mycircle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MycircleComponent implements OnInit {   
  contactsdata: contactModel[];
  editid: any;
  showaddContact = false;
  imageUrl=environment.imagesurl;
  constructor(private mycircleService: MyCircleService,private ds: DataService, private spinner: NgxSpinnerService) {
  }
  ngOnInit() {
    this.getUserConatacts();
  }
  reloadList(): void {  
    this.spinner.show();  
    this.editid =null;
    this.getUserConatacts();
  }
  showcontactDialogbox=function(){
    this.editid=null;
    this.showaddContact = !this.showaddContact;
  }

  getphotourl=function(photoid)
  {
    debugger;
   return environment.imagesurl+photoid;
  }
  editcircle = function (currentitemId) { 
      
    this.ds.sendData(currentitemId);
    this.showaddContact = !this.showaddContact;
    this.editid = currentitemId;
  }
  getUserConatacts=function()
  {   
      this.spinner.show();  
      this.mycircleService.getUserContacts().subscribe((data: Array<contactModel>) => {
      this.spinner.hide();
      debugger;
      this.contactsdata = data;
    });    
  }
  changedialogValue(event){  
    if([event.closepoup]){           
      this.showaddContact = !this.showaddContact;
      this.reloadList();
    }
  }
}
