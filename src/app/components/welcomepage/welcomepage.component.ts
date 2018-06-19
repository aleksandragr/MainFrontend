import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataservice/data.service';
import { searchDto } from '../../searchdto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {

  searchDto: any={};
  poruka: string;
  poruka2: string;
  
  constructor(private dataService: DataService,private router: Router) { }

  ngOnInit() {}

  newMessage() {
    
    this.dataService.changeMessageDestination(this.searchDto.destination);
    this.dataService.changeMessageCheckin(this.searchDto.checkIn);
    this.dataService.changeMessageCheckout(this.searchDto.checkOut);
    this.dataService.changeMessagepersonNum(this.searchDto.numPerson);
  }

}
