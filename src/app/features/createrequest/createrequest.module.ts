import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaterequestPageRoutingModule } from './createrequest-routing.module';

import { CreaterequestPage } from './createrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaterequestPageRoutingModule
  ],
  declarations: [CreaterequestPage]
})
export class CreaterequestPageModule {}
