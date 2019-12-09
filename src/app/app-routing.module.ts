import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./view/login/login.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent,
    // canActivate: [AuthGuard, AuthGuardRoutes],
    // data: {role: PermissaoUtil.INT_LAF_ACESSAR}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
