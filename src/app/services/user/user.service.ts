import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import {HttpClient}from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { HttpRequest} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':'application/json' ,Authorization:'Bearer ' + localStorage.getItem('ng2-webstorage|loggedin')})}; 
  headers: new HttpRequest<any>.headers.set('Authorization', 'Bearer ' + localStorage.getItem('ng2-webstorage|loggedin'));
 
  

  @Injectable()
  export class UserService {
    //private baseUrl:string='http://localhost:8084/user';
   // private user:User;
     constructor(private httpClient:HttpClient) {}

     getReservations(id:any):Observable<any> {
        return this.httpClient.get('http://localhost:8085/reservation/getAllReserOfRegU/'+id,{});
      }


      cancelReservation(id:any):Observable<any> {
        return this.httpClient.post('http://localhost:8085/reservation/deleteReservation/'+id,{});
      }

      getUser(id:any):Observable<any> {
        return this.httpClient.get('http://localhost:8085/reguser/getUser/'+id,{});
     }


     //ACCOMMODATION
     getAccommodation(id:any):Observable<any> {
      return this.httpClient.get('http://localhost:8085/review/getAccommodation/'+id,httpOptions);
     }
     getServices(id:any):Observable<any> {
      return this.httpClient.get('http://localhost:8085/aservices/getServices/'+id,{});
     }
     getAccReviews(id:any):Observable<any> {
      return this.httpClient.get('http://localhost:8085/review/getReviews/'+id,{});
    }

}