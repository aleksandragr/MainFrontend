import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataservice/data.service';
import { searchDto } from '../../searchdto';
import { SearchService } from '../../services/search/search.service';
import { AccommodationDTO } from '../../accommodation';
import { ReservationDto } from '../../reservation';

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
  reservationB: any={};
  reser: any={};
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
    
    

    });

  }

  reservation(id,name){

    console.log(id);
    console.log(name);
    this.reservationB.accommodation_id=id;
    this.reservationB.start_date=this.pocetak;
    this.reservationB.end_date=this.kraj;
    this.reservationB.regUser=1;
    this.reservationB.room_type=this.ljudi;

    this.searchService.reser(this.reservationB)
    .subscribe(data => {this.reser=data;
    
    });

  }

}
