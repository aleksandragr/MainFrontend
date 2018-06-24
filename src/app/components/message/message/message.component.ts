import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {ReguserService} from '../../../services/reguser/reguser.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public form: FormGroup;

  constructor(private _userService:ReguserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      comment: new FormControl('',[Validators.required]),
  })
  }

  sendMessage(){
    let reviewfield = this.form.value;
    console.log(reviewfield.comment);
    this._userService.sendMessage(1,1,reviewfield.comment,1).subscribe((data)=>{alert(data.message)});
    
  }
}
