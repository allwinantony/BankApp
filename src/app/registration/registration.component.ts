import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // uname="";
  // acno="";
  // pswd="";

  // registerModel
  registerForm = this.fb.group({
    uname:[''],
    acno:[''],
    pswd:['']
  });

  constructor(private fb:FormBuilder, private ds: DataService, private router: Router) { }//these are the dependency injections of register modules
// formbuilder is a class that contains group, array and control for- ReactiveFormsModule
  ngOnInit(): void {
  }

  //userdefind functions

  signup(){
    let uname = this.registerForm.value.uname;
    let acno = this.registerForm.value.acno;
    let pswd = this.registerForm.value.pswd;
    const result=this.ds.signup(acno,uname,pswd);
    if(result){
      alert("userDetails added successfully")
      this.router.navigateByUrl('')
    }
    else{
      alert("failed to add userDetails")
    }
  }
}
