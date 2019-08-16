import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public authService: AuthService) { }
  public showSpinner: boolean = false;
  
  ngOnInit() {
  }

  public onSignup(form: NgForm){

    const email = form.value.email;
    const password = form.value.password;
    
    this.authService.signupUser(email, password);
  
  }

}
