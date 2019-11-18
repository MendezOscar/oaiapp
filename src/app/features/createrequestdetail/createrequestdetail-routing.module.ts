import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaterequestdetailPage } from './createrequestdetail.page';

const routes: Routes = [
  {
    path: '',
    component: CreaterequestdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaterequestdetailPageRoutingModule {}
