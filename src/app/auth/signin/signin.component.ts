import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["../auth.component.scss",]
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
