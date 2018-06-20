import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { searchDto } from '../../searchdto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  search(search: searchDto): Observable<any>{

    return this.http.post<any>('http://localhost:8085/search/accommodations',search, httpOptions);

  }


  filterType(search: searchDto): Observable<any>{

    return this.http.post<any>('http://localhost:8085/search/filteservices', search, httpOptions);

  }

  findAllService(): Observable<any>{

    return this.http.get<any>('http://localhost:8085/search/getservices');

  }

}
