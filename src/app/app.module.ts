import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import {PRIMENG_IMPORTS} from "./primeng-imports";
import { ClienteComponent } from './view/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PRIMENG_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
