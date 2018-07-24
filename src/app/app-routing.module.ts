import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicinfoComponent } from './basicinfo/basicinfo.component';

const routes: Routes = [
  { path: 'basicInfo', component: BasicinfoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
