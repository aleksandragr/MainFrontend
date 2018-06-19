import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

const routes: Routes = [

  {path: '', component: DashboardComponent, children:
    [
      { path: '', component: WelcomepageComponent},
      { path: 'mainpage', component: MainpageComponent}
    ]


}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
