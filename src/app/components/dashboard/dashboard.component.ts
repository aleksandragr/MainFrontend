import { Component, OnInit } from '@angular/core';
import {Reguser} from '../../reguser';
import {LogService} from '../../services/log/log.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public user:Reguser;
  message:string;

  constructor(private _logService:LogService,private _router: Router) { }

  ngOnInit() {

    this.user=this._logService.getLocalStore();

 
  }

  logout(){
    this._logService.delLocalStore();
    window.location.reload(true);
    this._router.navigateByUrl("firstpage/login");
  }


}
