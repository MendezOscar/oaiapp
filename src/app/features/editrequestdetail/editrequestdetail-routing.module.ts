import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditrequestdetailPage } from './editrequestdetail.page';

const routes: Routes = [
  {
    path: '',
    component: EditrequestdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditrequestdetailPageRoutingModule {}
