import { Component, OnInit } from '@angular/core';
import { ReguserService } from '../../services/reguser/reguser.service';
import { Router } from '@angular/router';
import { VariableAst } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user1: any={};
  poruka: any={};
  private display_info="none";
  public prikazi = false;

  public length = false;
  public capital = false;
  public letter = false;
  public number = false;
  public interpunction = false;

  constructor(private userService: ReguserService, private router: Router) { }

  ngOnInit() {
  }

  
  
  register(): void {
    
    this.userService.register(this.user1).
    subscribe(data => { this.poruka = data;

      if(data.message=="User is registrated"){
        this.router.navigate(['firstpage/login']);
      }
      

       });

  }

  validationWindow(){
    if(!this.prikazi)
    this.prikazi = true;
  }

  validationWindowOut(){
    if(this.prikazi)
    this.prikazi = false;
  }

  changePassword(){
    var password = this.user1.password1;
    if(password.length>=8){
      this.length=true;
    }else {this.length=false;}

    if(password.match(/[A-Z]/)){
      this.capital=true;
    }else {this.capital=false;}

    if(password.match(/[A-z]/)){
      this.letter=true;
    }else {this.letter=false;}

    if(password.match(/[^a-zA-Z0-9\-\/]/)){
      this.interpunction=true;
    }else {this.interpunction=false;}

    if(password.match(/\d/)){
      this.number=true;
    }else {this.number=false;}
  }

  

}