import { Component, OnInit } from '@angular/core';
import { ReguserService } from '../../services/reguser/reguser.service';
import { Router } from '@angular/router';
import {LogService} from '../../services/log/log.service';
import {Reguser} from '../../reguser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user1: any={};
  data: any={};

  constructor(private userService: ReguserService, private router: Router,private _logService:LogService) { }

  ngOnInit() {
  }

  login(): void{

    this.userService.login(this.user1)
    .subscribe(data => {this.data=data;

      if(data.message=="User is logged in"){
        
        this._logService.setLocalStore(this.user1.email);
        this.router.navigate(['/firstpage']);
      }

      

    });



  }

}
