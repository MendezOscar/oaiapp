import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewrequestdetailPageRoutingModule } from './viewrequestdetail-routing.module';

import { ViewrequestdetailPage } from './viewrequestdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewrequestdetailPageRoutingModule
  ],
  declarations: [ViewrequestdetailPage]
})
export class ViewrequestdetailPageModule {}
