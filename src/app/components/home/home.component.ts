import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

constructor(private router: Router){}

logged: boolean = false
ngOnInit(): void {
  this.checkLogin()
}

checkLogin(){
  const token = window.localStorage.getItem('token')
  if(token){
    this.logged = true
  } else {
    this.logged = false
  }
}

login(){
  this.router.navigate(['login'])
}

logout(){
  window.localStorage.removeItem('token')
  window.location.reload()
}

homeEdit(){
  this.router.navigate(['home'])
}
}
