import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.component.scss']
})
export class SignupComponent implements OnInit {

  public showSpinner: boolean = false;
  public checkPasswords: boolean = false;
  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, public authService: AuthService) {

    let EmailPattern = this.EmailValidator();

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(EmailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }

  public onSignup() {

    const email = this.form.value.email;
    const password = this.form.value.password;

    this.authService.signupUser(email, password);

  }

  public EmailValidator() {
    return /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  }

}
