import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InformacionFinancieraComponent } from './informacion-financiera/informacion-financiera.component';
import { SummaryComponent } from './summary/summary.component';

import { BasicinfoComponent } from './basicinfo/basicinfo.component';

import { AppRoutingModule } from './/app-routing.module';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InformacionFinancieraComponent,
    SummaryComponent,
    BasicinfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
