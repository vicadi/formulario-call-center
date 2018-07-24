import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SummaryComponent } from './summary/summary.component';
=======
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { AppRoutingModule } from './/app-routing.module';

import { FormsModule } from '@angular/forms';
>>>>>>> InformacionBasica

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SummaryComponent
=======
    BasicinfoComponent
>>>>>>> InformacionBasica
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
