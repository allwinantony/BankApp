import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd execution
//properties and methods

  aim = '"Your perfect banking partner"';
  account = "Enter your acno here"
  acno=""
  pswd=""
  keysymbol="Password"

  constructor(private router:Router, private ds: DataService) { } //1st execution

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

  // login(){
  //   var acno = this.acno;
  //   var pswd = this.pswd;
  //   var userDetails = this.userDetails;
  //   if(acno in userDetails){
  //     if(pswd == userDetails[acno]['password']){
  //       alert("login successfull");
  //       this.router.navigateByUrl('dashboard');
  //     }
  //     else{
  //       alert("incorrect password");
  //     }
  //   }
  //   else{
  //     alert("user not found")
  //   }
  // }

  login(){
    var acno = this.acno;
    var pswd =this.pswd;
    const result = this.ds.login(acno,pswd);
    if(result){
      alert("successfull");
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert("check your password and try again")
    }
  }


  // login(a:any,p:any){
  //   var acno = a.value;
  //   var pswd = p.value;
  //   var userDetails = this.userDetails;
  //   if(acno in userDetails){
  //     if(pswd == userDetails[acno]['password']){
  //       alert("login successfull");
  //     }
  //     else{
  //       alert("incorrect password");
  //     }
  //   }
  //   else{
  //     alert("user not found! invalid user")
  //   }
  // }

}

