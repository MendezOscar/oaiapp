import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewrequestdetailPage } from './viewrequestdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ViewrequestdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewrequestdetailPageRoutingModule {}
