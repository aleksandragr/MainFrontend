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


  savedestination(des){
    this.localStorage.store("destinacija",JSON.stringify(des));
  }

  getDestination(){
    var des = JSON.parse(this.localStorage.retrieve('destinacija'));
    return des;
    
  }

  delDestinacija(): void{
    this.localStorage.clear('destinacija');
  }

  savecheckIn(checkin){
    this.localStorage.store("checkin",JSON.stringify(checkin));
  }

  getCheckIn(){
    var checi = JSON.parse(this.localStorage.retrieve('checkin'));
    return checi;
    
  }

  delCheckIn(): void{
    this.localStorage.clear('checkin');
  }




  savecheckOut(checkou){
    this.localStorage.store("checkout",JSON.stringify(checkou));
  }

  getCheckOut(){
    var checo = JSON.parse(this.localStorage.retrieve('checkout'));
    return checo;
    
  }

  delCheckOut(): void{
    this.localStorage.clear('checkout');
  }


  saveperson(numbperson){
    this.localStorage.store("numperson",JSON.stringify(numbperson));
  }

  getperson(){
    var nump = JSON.parse(this.localStorage.retrieve('numperson'));
    return nump;
    
  }

  delNumPerson(): void{
    this.localStorage.clear('numperson');
  }

}
