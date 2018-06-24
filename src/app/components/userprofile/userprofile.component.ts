import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {LogService} from '../../services/log/log.service';
import {Reguser} from '../../reguser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  
  private reservations = [];
  user: Reguser;

  constructor(private _userService:UserService,private _logService:LogService,private router: Router) { }

  ngOnInit() {
   this.user= this._logService.getLocalStore();
   // this.getUser(1);
   this.reloadReservations();
  }
  reloadReservations(){
    this.getReservations(this.user.id);
  }

  getUser(id:any){
    this._userService.getUser(this.user.id).subscribe((data)=>{this.user=data;});
    
  }

  getReservations(id:any){

    this._userService.getReservations(this.user.id).subscribe((data)=>{this.reservations=data;});
  }

  cancelReservation(id){
    console.log(id);
    this._userService.cancelReservation(id).subscribe((data)=>{alert(data.message); this.reloadReservations();});
  }
}
