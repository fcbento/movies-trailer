import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["../auth.component.scss"],
  animations: [
    trigger('fade', [
      transition(':enter', [style({ opacity: 0 }), animate('0.2s', style({ opacity: 1 }))]),
      //transition(':leave', [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))])
    ])]
})
export class SigninComponent implements OnInit {

  public showSpinner: boolean = false;
  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, public authService: AuthService) {

    let EMAILPATTERN = this.EmailValidator();

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(EMAILPATTERN)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() { }

  public onSignin(): void {

    const email = this.form.value.email;
    const password = this.form.value.password;

    this.showSpinner = true;

    this.authService.signinUser(email, password)
      .then(data => {
        if (data) {
          this.showSpinner = false;
        }
      });
  }

  public EmailValidator() {
    return /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  }
}
