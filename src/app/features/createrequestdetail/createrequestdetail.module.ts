import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaterequestdetailPageRoutingModule } from './createrequestdetail-routing.module';

import { CreaterequestdetailPage } from './createrequestdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaterequestdetailPageRoutingModule
  ],
  declarations: [CreaterequestdetailPage]
})
export class CreaterequestdetailPageModule {}
