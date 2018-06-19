import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataservice/data.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  destinacija: string;
  pocetak: string;
  kraj: string;
  ljudi: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.destinationMessage.subscribe(message => this.destinacija = message);
    this.dataService.checkinMessage.subscribe(message => this.pocetak = message);
    this.dataService.checkoutMessage.subscribe(message => this.kraj = message);
    this.dataService.personnumMessage.subscribe(message => this.ljudi = message);
  }

}
