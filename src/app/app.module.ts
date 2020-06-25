import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-page/login/login.component';
import { ForgotPasswordComponent } from './login-page/forgot-password/forgot-password.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentsComponent } from './payments/payments.component';
import { OffersComponent } from './offers/offers.component';
import { ChatComponent } from './chat/chat.component';
import { MapComponent } from './map/map.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { SettingsComponent } from './settings/settings.component';
import { SidePanelComponent } from './common/side-panel/side-panel.component';
import { SearchComponent } from './common/search/search.component';
import { ExpenseOverviewComponent } from './dashboard/expense-overview/expense-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    LoginPageComponent,
    DashboardComponent,
    PaymentsComponent,
    OffersComponent,
    ChatComponent,
    MapComponent,
    NavigationComponent,
    SettingsComponent,
    SidePanelComponent,
    SearchComponent,
    ExpenseOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
