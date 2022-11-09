import { Injectable } from '@angular/core';
import { ɵassignExtraOptionsToRouter } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //login name display
  currentUser: any;

  //login acno
  currentAcno:any;

  userDetails: any ={//objects of objects
    1000:{acno:1000, username:'Hussain',password:1000,balance:10000, transaction:[]},
    1001:{acno:1001, username:'Reymond',password:1001,balance:10000, transaction:[]},
    1002:{acno:1002, username:'Fayas',password:1002,balance:1000, transaction:[]}
  }

  constructor() { }
  signup(acno:any,username :any , password:any){
    var userDetails = this.userDetails;
      if(acno in userDetails){
        return false;
      }
      else{
        userDetails[acno]={acno,username,password}
      }
      console.log(userDetails)
      return true;
  }

  login(acno: any, pswd: any){
    var userDetails = this.userDetails;
    if(acno in userDetails){
      if(pswd == userDetails[acno].password){
        this.currentUser = userDetails[acno].username;
        this.currentAcno = acno;
        return true;
      }
      else{
        alert("invalid password")
        return false;
      }
    }
    else{
      alert("invalid user details")
      return false;
    }
  }


  deposit(acno:any, pswd:any, amount:any){
    var userDetails = this.userDetails;
    if(acno in userDetails){
      if(pswd = userDetails[acno].password){
        userDetails[acno].balance += parseInt(amount);
        userDetails[acno].transaction.push({
          type: 'Credit',
          amount
        })
        console.log(userDetails);
        return userDetails[acno].balance;
      }
      else{
        alert("invalid password");
        return false;
      }
    }
    else{
      alert("invalid user details");
      return false;
    }
  }

  withdraw(acno:any, pswd:any, amount:any){
    var userDetails = this.userDetails;
    if(acno in userDetails){
      if(pswd == userDetails[acno].password){
        if(parseInt(amount) < userDetails[acno].balance || parseInt(amount) == userDetails[acno].balance){
          userDetails[acno].balance -= parseInt(amount);
          userDetails[acno].transaction.push({
            type: 'debit',
            amount
          })
          console.log(userDetails)
          return userDetails[acno].balance;
        }
        else{
          alert("insufficient balance");
          return false;
        }
      }
      else{
        alert("invalid password");
        return false;
      }
    }
    else{
      alert("invalid account details");
      return false;
    }
  }

  getTransaction(acno:any){
    return this.userDetails[acno].transaction;
  }
}
