import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaterequestPage } from './createrequest.page';

const routes: Routes = [
  {
    path: '',
    component: CreaterequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaterequestPageRoutingModule {}
