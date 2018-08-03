import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InformacionFinancieraComponent } from './informacion-financiera/informacion-financiera.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NavBarUserComponent } from './nav-bar-user/nav-bar-user.component';
import { HomeComponent } from './home/home.component';
import { DeliveryCardService } from './delivery-card/delivery-card.service';
import { DeliveryCardComponent } from './delivery-card/delivery-card.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ScoreAppComponent } from './score-app/score-app.component';
import { SummaryComponent } from './summary/summary.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CustomerService} from './services/customer.service';
import { CheckService } from './services/check.service';
import { HttpClientModule } from '@angular/common/http';
import { SummaryService } from './summary/summary.service';
import { LoginService } from './user-login/user-login.service';
import { HttpModule } from '../../node_modules/@angular/http';


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
    HttpModule,
    AppRoutingModule,
    FormsModule,
    CurrencyMaskModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [CustomerService, CheckService, SummaryService, DeliveryCardService, LoginService],
  bootstrap: [AppComponent]
})

export class AppModule {}

