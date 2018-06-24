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
import { LogService } from './services/log/log.service';
import { ReviewComponent } from './components/review/review.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewaccommodationComponent } from './components/viewaccommodation/viewaccommodation.component';
import { MessageComponent } from './components/message/message/message.component';

const appRoutes:Routes=[
  {path:'welcomepage',component:WelcomepageComponent},
  {path:  '', redirectTo: '/welcomepage', pathMatch: 'full'},
  {path:'userprofile',component:UserprofileComponent},
  {path:'review',component:ReviewComponent},
  
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
    RegisterComponent,
    ReviewComponent,
    ViewaccommodationComponent,
    MessageComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    Ng2Webstorage,
    ReactiveFormsModule

  ],
  providers: [DataService,SearchService,UserService,ReguserService,LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
