import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [

  


  { path: '', redirectTo: '/firstpage', pathMatch: 'full'},
  {path: 'firstpage', component: DashboardComponent,
   children:[
      { path: '', component: WelcomepageComponent},
      { path: 'mainpage', component: MainpageComponent},
      { path: 'profile', component: UserprofileComponent},
      { path: 'login', component: LoginComponent},
      { path: 'registration', component: RegisterComponent}
    ]


  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
