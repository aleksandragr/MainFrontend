import { Component, OnInit } from '@angular/core';
import { ReguserService } from '../../services/reguser/reguser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user1: any={};
  poruka: any={};

  constructor(private userService: ReguserService, private router: Router) { }

  ngOnInit() {
  }


  register(): void {
    
    this.userService.register(this.user1).
    subscribe(data => { this.poruka = data;

      if(data.message=="User is registrated"){
        this.router.navigate(['/firstpage']);
      }
      

       });

  }

}
