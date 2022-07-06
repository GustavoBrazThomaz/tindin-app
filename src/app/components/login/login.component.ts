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

  constructor(private formBuilder: FormBuilder, private API: ApiService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(){
    const user = this.formulario.value
    this.API.authUser(user).subscribe(res => {
      if(res.status === 200)localStorage.setItem('token', res.body.token)
    }, (error) => this.API.openSnackBar(error.error.message))
  }
}
