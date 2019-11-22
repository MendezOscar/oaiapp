import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './features/login/login.module#LoginPageModule'
  },
  {
    path: 'gestion',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'createrequest',
    loadChildren: () => import('./features/createrequest/createrequest.module').then( m => m.CreaterequestPageModule)
  },
  {
    path: 'editrequest',
    loadChildren: () => import('./features/editrequest/editrequest.module').then( m => m.EditrequestPageModule)
  },
  {
    path: 'createrequestdetail',
    loadChildren: () => import('./features/createrequestdetail/createrequestdetail.module').then( m => m.CreaterequestdetailPageModule)
  },
  {
    path: 'editrequestdetail',
    loadChildren: () => import('./features/editrequestdetail/editrequestdetail.module').then( m => m.EditrequestdetailPageModule)
  },
  {
    path: 'viewrequestdetail',
    loadChildren: () => import('./features/viewrequestdetail/viewrequestdetail.module').then( m => m.ViewrequestdetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
