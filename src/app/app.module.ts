import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


import { DataService } from './services/dataservice/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
