import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  declarations: [
    ChatComponent
  ]
})

export class ChatModule{
}
