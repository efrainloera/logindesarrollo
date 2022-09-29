import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
//Cuenta Auth0

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-hx9cy1se.us.auth0.com',
      clientId: 'IsxyyM1rZo7V3siEjPlzWd1Vvi0Q90Z8'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }