import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataservice/data.service';
import { searchDto } from '../../searchdto';
import { Router } from '@angular/router';
import { LogService } from '../../services/log/log.service';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {

  searchDto: any={};
  poruka: string;
  poruka2: string;
  
  constructor(private dataService: DataService,private router: Router,private localstorage: LogService) { }

  ngOnInit() {}

  newMessage() {
    
    this.dataService.changeMessageDestination(this.searchDto.destination);
    this.dataService.changeMessageCheckin(this.searchDto.checkIn);
    this.dataService.changeMessageCheckout(this.searchDto.checkOut);
    this.dataService.changeMessagepersonNum(this.searchDto.numPerson);


    this.localstorage.savedestination(this.searchDto.destination);
    this.localstorage.savecheckIn(this.searchDto.checkIn);
    this.localstorage.savecheckOut(this.searchDto.checkOut);
    this.localstorage.saveperson(this.searchDto.numPerson);
  }

}
