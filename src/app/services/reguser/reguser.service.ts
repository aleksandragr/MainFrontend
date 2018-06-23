import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Reguser } from '../../reguser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ReguserService {

  constructor(private http: HttpClient) { }

  //RAITING
  addReview(rating:any,userid:any,commentcontent:any,accommodationid:any):Observable<any>{
    return this.http.post('http://localhost:8085/review/addReview',{
    rating:rating,
    userid:userid,
    commentcontent:commentcontent,
    accommodationid:accommodationid
    })
  }


  login(user: Reguser): Observable<any>{

    return this.http.post<any>('http://localhost:8085/reguser/login', user, httpOptions);

  }

  register (user: Reguser): Observable<any>{
    
    return this.http.post<any>('http://localhost:8085/reguser/registration', user, httpOptions);

  }

}
