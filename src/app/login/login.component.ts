import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd execution
//properties and methods

  aim = "Your perfect banking partner";
  account = "Enter your acno here"
  acno=""
  pswd=""
  keysymbol="Password"
  
  userDetails: any ={//objects of objects
    1000:{acno:1000, username:'Hussain',password:1000,balance:10000},
    1001:{acno:1001, username:'Reymond',password:1000,balance:10000},
    1002:{acno:1002, username:'Fayas',password:1000,balance:10000}
  }

  constructor() { }//1st execution

  ngOnInit(): void {//2nd execution- life cycle hooks of angular
    //initial process of component
  }
  //4th execution- userdefined functions

  acnoChange(event: any){
    // console.log(event.target.value); 
    this.acno = (event.target.value); 
  }
  pswdChange(event: any){
    // console.log(event.target.value);
    this.pswd=(event.target.value);
  }

  login(){
    var acno = this.acno;
    var pswd = this.pswd;
    var userDetails = this.userDetails;
    if(acno in userDetails){
      if(pswd == userDetails[acno]['password']){
        alert("login successfull");
      }
      else{
        alert("incorrect password");
      }
    }
    else{
      alert("user not found")
    }
  }
} 
