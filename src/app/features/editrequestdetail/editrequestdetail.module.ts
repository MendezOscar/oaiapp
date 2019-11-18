import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditrequestdetailPageRoutingModule } from './editrequestdetail-routing.module';

import { EditrequestdetailPage } from './editrequestdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditrequestdetailPageRoutingModule
  ],
  declarations: [EditrequestdetailPage]
})
export class EditrequestdetailPageModule {}
