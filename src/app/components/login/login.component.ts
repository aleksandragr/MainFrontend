import { Component, OnInit } from '@angular/core';
import { ReguserService } from '../../services/reguser/reguser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user1: any={};

  constructor(private userService: ReguserService, private router: Router) { }

  ngOnInit() {
  }

  login(): void{

    this.userService.login(this.user1)
    .subscribe(agent => {this.user1=agent;
      this.router.navigate(['/firstpage']);

    });



  }

}
