import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataservice/data.service';
import { searchDto } from '../../searchdto';
import { SearchService } from '../../services/search/search.service';
import { AccommodationDTO } from '../../accommodation';

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
  search: any={};
  accommodations: AccommodationDTO[];
  constructor(private dataService: DataService, private searchService: SearchService) { }

  ngOnInit() {
    this.dataService.destinationMessage.subscribe(message => this.destinacija = message);
    this.dataService.checkinMessage.subscribe(message => this.pocetak = message);
    this.dataService.checkoutMessage.subscribe(message => this.kraj = message);
    this.dataService.personnumMessage.subscribe(message => this.ljudi = message);

    this.search.destination=this.destinacija;
    this.search.checkIn=this.pocetak;
    this.search.checkOut=this.kraj;
    this.search.numPerson=Number(this.ljudi);
    
    this.searchService.search(this.search)
    .subscribe(data => {this.accommodations=data;
    console.log(this.accommodations[0]);
    

    });

  }

}
