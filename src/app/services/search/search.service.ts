import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { searchDto } from '../../searchdto';
import { ReservationDto } from '../../reservation';
import {LocalStorageService} from 'ngx-webstorage';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':'application/json'})}; 
 
  httpOptions.headers.append('Authorization-Token',JSON.parse(localStorage.getItem('ng2-webstorage|loggedin')));
                           

/*
const headers = new HttpHeaders({'x-auth-token':JSON.stringify(sessionStorage.getItem('token')});
opt.headers = headers;
/*const httpOptions = new HttpHeaders({
  'Authorization': JSON.parse(localStorage.get('ng2-webstorage|loggedin')),
  'Content-Type': 'application/json',
});

  /**
   * const user =
   * const jwt = user.jwt;
   */


@Injectable()
export class SearchService {

  constructor(private http: HttpClient,private localStorage: LocalStorageService) { }

  search(search: searchDto): Observable<any>{
    httpOptions.headers.append('Authorization-Token',JSON.parse(localStorage.getItem('ng2-webstorage|loggedin')));
    return this.http.post<any>('http://localhost:8085/search/accommodations',search, httpOptions);

  }

  reser(reservation: ReservationDto): Observable<any>{

    return this.http.post<any>('http://localhost:8085/reservation/addReservation',reservation, httpOptions);

  }
  
  filterType(search: searchDto): Observable<any>{

    return this.http.post<any>('http://localhost:8085/search/filteservices', search, httpOptions);

  }

  findAllService(): Observable<any>{
    
    return this.http.get<any>('http://localhost:8085/search/getservices');

  }

  findAllTypes(): Observable<any>{
    
    return this.http.get<any>('http://localhost:8085/search/gettypes');

  }


  findAllCategory(): Observable<any>{
    
    return this.http.get<any>('http://localhost:8085/search/getcategorys');

  }

  sortAccommodation(searchdto: searchDto): Observable<any>{

    return this.http.post<any>('http://localhost:8085/search/sortcategory', searchdto, httpOptions);

  }

}
