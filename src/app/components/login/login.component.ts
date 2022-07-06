import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formulario!: FormGroup;


  constructor(private formBuilder: FormBuilder, private API: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(){
    const user = this.formulario.value
    this.API.login(user).subscribe(res => {
      if(res.status === 200){
        
        localStorage.setItem('token', res.body.token)
        window.location.replace('')
      }
    }, (error) => this.API.openSnackBar(error.error.message))
  }
}
