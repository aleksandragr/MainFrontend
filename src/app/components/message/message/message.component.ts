import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {ReguserService} from '../../../services/reguser/reguser.service';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public form: FormGroup;
  public reservation_id:any;
  public reservation:any;

  constructor(private _userService:ReguserService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      comment: new FormControl('',[Validators.required]),
  })

  
  this.route.paramMap.switchMap((params: ParamMap) => {
    let reservation_id = params.get('id');
   return reservation_id;
})
.subscribe(res => this.reservation_id = res);

this._userService.getReservation(this.reservation_id).subscribe((data)=>{this.reservation=data});


  }



  sendMessage(){
    let reviewfield = this.form.value;
    console.log(reviewfield.comment);
    this._userService.sendMessage(this.reservation.accommodation.agent.id,this.reservation.regUser.id,reviewfield.comment,this.reservation.accommodation.id).subscribe((data)=>{alert(data.message)});
    
  }
}
