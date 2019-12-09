import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./view/login/login.component";
import {ClienteComponent} from "./view/cliente/cliente.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent,
    // canActivate: [AuthGuard, AuthGuardRoutes]
  },
  {path: 'cliente', component: ClienteComponent
    // canActivate: [AuthGuard, AuthGuardRoutes]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
