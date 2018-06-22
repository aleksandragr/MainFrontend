import { Injectable } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {Reguser} from '../../reguser';


@Injectable()
export class LogService {

  user: Reguser;

  constructor(private localStorage: LocalStorageService){}

  setLocalStore(u){
    this.localStorage.store("loggedin",JSON.stringify(u));
  }

  getLocalStore(){
    var user = JSON.parse(this.localStorage.retrieve('loggedin'));
    return user;
    
  }

  delLocalStore(): void{
    this.localStorage.clear('loggedin');
  }

}
