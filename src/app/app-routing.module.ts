import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {//login : show in default path (4200)
    path:'',component: LoginComponent
  },
  {//dashboard : show in another path(ie 4200/dashboard)
    path:'dashboard',component: DashboardComponent
  },
  {//registration
    path:'registration',component: RegistrationComponent
  },
  {//transaction
    path:'transaction',component: TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
