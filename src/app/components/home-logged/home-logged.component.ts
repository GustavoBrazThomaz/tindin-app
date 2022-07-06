import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-logged',
  templateUrl: './home-logged.component.html',
  styleUrls: ['./home-logged.component.scss']
})
export class HomeLoggedComponent implements OnInit {

constructor(private router: Router){}

ngOnInit(): void {}

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
