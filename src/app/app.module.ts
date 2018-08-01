import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InformacionFinancieraComponent } from './informacion-financiera/informacion-financiera.component';
import { SummaryComponent } from './summary/summary.component';

import { BasicinfoComponent } from './basicinfo/basicinfo.component';

import { AppRoutingModule } from './/app-routing.module';

import { FormsModule } from '@angular/forms';
import { NavBarUserComponent } from './nav-bar-user/nav-bar-user.component';
import { HomeComponent } from './home/home.component';
import { DeliveryCardComponent } from './delivery-card/delivery-card.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ScoreAppComponent } from './score-app/score-app.component';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    InformacionFinancieraComponent,
    SummaryComponent,
    BasicinfoComponent,
    NavBarUserComponent,
    HomeComponent,
    BasicinfoComponent,
    DeliveryCardComponent,
    UserLoginComponent,
    ScoreAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CurrencyMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

