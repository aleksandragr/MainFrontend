import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  private user:any;
  private reservations = [];

  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.getUser(1);
    this.getReservations(1);
  }

  getUser(id:any){
    this._userService.getUser(1).subscribe((data)=>{this.user=data;});
    console.log(this.user);
  }

  getReservations(id:any){
    this._userService.getReservations(1).subscribe((data)=>{this.reservations=data;});
  }

}
