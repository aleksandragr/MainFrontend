import { Component, OnInit } from '@angular/core';
import { ReguserService } from '../../services/reguser/reguser.service';
import { Router } from '@angular/router';
import {LogService} from '../../services/log/log.service';
import {Reguser} from '../../reguser';


@Component({
  selector: 'app-viewaccommodation',
  templateUrl: './viewaccommodation.component.html',
  styleUrls: ['./viewaccommodation.component.css']
})
export class ViewaccommodationComponent implements OnInit {

  user1: any={};
  data: any={};

  constructor(private userService: ReguserService, private router: Router,private _logService:LogService) { }

  ngOnInit() {
  }

 

}
