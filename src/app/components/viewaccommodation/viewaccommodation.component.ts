import { Component, OnInit } from '@angular/core';
import { ReguserService } from '../../services/reguser/reguser.service';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import {LogService} from '../../services/log/log.service';
import {Reguser} from '../../reguser';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { AccommodationDTO } from '../../accommodation';


@Component({
  selector: 'app-viewaccommodation',
  templateUrl: './viewaccommodation.component.html',
  styleUrls: ['./viewaccommodation.component.css']
})
export class ViewaccommodationComponent implements OnInit {

  user1: any={};
  data: any={};
  accommodation_id:any;
  accommodation:AccommodationDTO;
  reviews = [];
  services = [];


  constructor(private userService: ReguserService, private router: Router,private _logService:LogService,private route: ActivatedRoute, private _acService:UserService) { }

  ngOnInit() {

    this.route.paramMap.switchMap((params: ParamMap) => {
      let accommodation_id = params.get('id');
     return accommodation_id;
  })
  .subscribe(res => this.accommodation_id = res);

  this._acService.getAccommodation(this.accommodation_id).subscribe((data)=>{this.accommodation=data}); 
  this._acService.getAccReviews(this.accommodation_id).subscribe((data)=>{this.reviews=data.reviews});
  this._acService.getServices(this.accommodation_id).subscribe((data)=>{this.services=data});

  }
  

}
