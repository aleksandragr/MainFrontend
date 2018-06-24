import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {ReguserService} from '../../services/reguser/reguser.service';
import {LogService} from '../../services/log/log.service';
import {Reguser} from '../../reguser';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { AccommodationDTO } from '../../accommodation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  user: Reguser;
  public form: FormGroup;
  private cleanliness:number=10;
  private comfort:number=10;
  private facilities:number=10;
  private location:number=10;
  private staff:number=10;
  private valueForMoney:number=10;
  private rating:number=0;
  public accommodation_id:any;

  constructor(private _userService:ReguserService,private _logService:LogService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.switchMap((params: ParamMap) => {
      let accommodation_id = params.get('id');
     return accommodation_id;
  })
  .subscribe(res => this.accommodation_id = res);

    this.user= this._logService.getLocalStore();
    this.form = new FormGroup({
        comment: new FormControl('',[Validators.required]),
    })
  }

  selectChangeCleanliness(event:any){
     this.cleanliness=event.target.value;
  }
  selectChangeComfort(event:any){
    this.comfort=event.target.value;
  }
  selectChangeFacilities(event:any){
    this.facilities=event.target.value;
  }
  selectChangeLocation(event:any){
    this.location=event.target.value;
  }
  selectChangeStaff(event:any){
    this.staff=event.target.value;
  }
  selectChangeValueForMoney(event:any){
    this.valueForMoney=event.target.value;
  }
   

  sendReview(){
    let reviewfield = this.form.value;
    console.log(reviewfield.comment);
    this.rating=(this.cleanliness*1+this.comfort*1+this.facilities*1+this.location*1+this.staff*1+this.valueForMoney*1)/6;
    console.log(this.rating);
    this._userService.addReview(this.rating,this.user.id,reviewfield.comment,this.accommodation_id).subscribe((data)=>{alert(data.message)});
    
  }
}
