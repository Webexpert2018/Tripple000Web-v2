import { Component, OnInit } from '@angular/core';
import { ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
