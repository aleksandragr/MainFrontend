import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Ng2Webstorage} from 'ngx-webstorage';
import {MatListModule} from '@angular/material/list';
import { DataService } from './services/dataservice/data.service';
import { UserService } from './services/user/user.service';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SearchService } from './services/search/search.service';
import { HttpClientModule } from '@angular/common/http';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import {enableProdMode} from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { ReguserService } from './services/reguser/reguser.service';
import { RegisterComponent } from './components/register/register.component';

const appRoutes:Routes=[
  {path:'welcomepage',component:WelcomepageComponent},
  {path:  '', redirectTo: '/welcomepage', pathMatch: 'full'},
  {path:'userprofile',component:UserprofileComponent},
  
  ];

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WelcomepageComponent,
    MainpageComponent,
    UserprofileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    Ng2Webstorage
  ],
  providers: [DataService,SearchService,UserService,ReguserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
