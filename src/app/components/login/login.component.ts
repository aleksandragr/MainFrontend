import { Component, OnInit } from '@angular/core';
import { ReguserService } from '../../services/reguser/reguser.service';
import { Router } from '@angular/router';
import {LogService} from '../../services/log/log.service';
import {Reguser} from '../../reguser';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user1: any={};
  data: any={};
  httpOptions = new HttpHeaders;
  jwt:any;

  constructor(private userService: ReguserService, private router: Router,private _logService:LogService) { }

  ngOnInit() {
  }

  login(): void{

    this.userService.login(this.user1)
    .subscribe(data => {this.data=data;
      console.log(data);
      if(data==null){
          alert(" invalid email or password ");
      }
      else{
        this._logService.setLocalStore(this.data.jwt);
        window.location.reload(true);
        this.router.navigate(['/firstpage']);

      }
       
      }

      

    );



  }
  registration(){
    window.location.reload(true);
    this.router.navigate(['/firstpage/registration']);
  }

}
