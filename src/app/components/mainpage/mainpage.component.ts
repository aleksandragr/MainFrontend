import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataservice/data.service';
import { searchDto } from '../../searchdto';
import { SearchService } from '../../services/search/search.service';
import { AccommodationDTO } from '../../accommodation';
import { ReservationDto } from '../../reservation';
import {LogService} from '../../services/log/log.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Reguser } from '../../reguser';

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
  accommodations2: AccommodationDTO[];
  additionalServices: String[];
  types: String[];
  categorys: String[];
  typeDto: any={};
  checked: boolean;
  selectedOptions: any;
  selectedTypes: any;
  selectedCategory: any;
  stringovi: String[];
  selectedSort: any;
  sortDto: any={};
  accommodationsdto: AccommodationDTO[];
  u: Reguser;

  constructor(private dataService: DataService, private searchService: SearchService,  private loggedin: LogService, private router: Router) { }

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
        this.accommodations2 = this.accommodations;
        this.accommodationsdto = this.accommodations;
    });


    this.searchService.findAllService()
    .subscribe(data => {this.additionalServices = data});

    this.searchService.findAllTypes()
    .subscribe(data => {this.types = data });

    this.searchService.findAllCategory()
    .subscribe(data =>{this.categorys = data});

  }

  reservation(id,name){
       
    var ua = this.loggedin.getLocalStore();
    this.u=ua;
    
    this.reservationB.accommodation_id=id;
    this.reservationB.start_date=this.pocetak;
    this.reservationB.end_date=this.kraj;
    
    this.reservationB.room_type=this.ljudi;
    
    if(this.u!=null){
      this.reservationB.regUser=this.u.id;
      this.reservationB.email=this.u.email;
      this.reservationB.name=this.u.name;
      this.reservationB.surname=this.u.surname;
      this.searchService.reser(this.reservationB)
      .subscribe(data => {this.reser=data;
    
      });
    }
    else{
      this.router.navigate(['/firstpage/login']);
    }


  }



 serviceFilter(): void{
  
  this.typeDto.filterServices = this.selectedOptions;
  this.typeDto.filterTypes = this.selectedTypes;
  this.typeDto.filteCategorys = this.selectedCategory;
  this.typeDto.listAccommodationid = this.accommodations2;
  this.typeDto.checkIn = this.pocetak;
  this.typeDto.numPerson=Number(this.ljudi);
  this.searchService.filterType(this.typeDto)
  .subscribe(data => {this.accommodations = data;
    this.accommodationsdto = this.accommodations;
    
  
  });

 }



onSelectOptionChange(list: any) {
    
  this.selectedOptions = list.selectedOptions.selected.map(item => item.value);
  
}

onSelectOptionChangeType(list: any) {
    
  this.selectedTypes = list.selectedOptions.selected.map(item => item.value);
  
}

onSelectOptionChangeCategory(list: any) {

this.selectedCategory = list.selectedOptions.selected.map(item => item.value);

}

sortAccommodation(): void{
  console.log(this.selectedSort);
  this.sortDto.listAccommodationid = this.accommodations;
  this.sortDto.sortA = this.selectedSort;
  this.sortDto.checkIn = this.pocetak;
  this.sortDto.numPerson=Number(this.ljudi);
  this.sortDto.listAccommodationsDto = this.accommodationsdto;
  this.searchService.sortAccommodation(this.sortDto)
  .subscribe(data => this.accommodations = data);

}




}
