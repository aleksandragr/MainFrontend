import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataservice/data.service';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {

  message:string;
  poruka: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.poruka = 'Nova porukau'
    this.dataService.changeMessage(this.poruka)
  }

}
