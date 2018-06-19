import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {


  private destination = new BehaviorSubject('');
  destinationMessage = this.destination.asObservable();

  private checkin = new BehaviorSubject('');
  checkinMessage = this.checkin.asObservable();

  private checkout = new BehaviorSubject('');
  checkoutMessage = this.checkout.asObservable();

  private personnum = new BehaviorSubject('');
  personnumMessage = this.personnum.asObservable();

  constructor() { }

  changeMessageDestination(message: string) {
    this.destination.next(message)
  }

  changeMessageCheckin(message: string) {
    this.checkin.next(message)
  }

  changeMessageCheckout(message: string) {
    this.checkout.next(message)
  }

  changeMessagepersonNum(message: string) {
    this.personnum.next(message)
  }
}
