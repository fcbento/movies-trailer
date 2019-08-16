import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["../auth.component.scss",]
})
export class SigninComponent implements OnInit {

  constructor(public authService: AuthService) {}

  public showSpinner: boolean = false;
  
  ngOnInit() {}

  public onSignin(form: NgForm): void {
    
    const email = form.value.email;
    const password = form.value.password;
    
    this.showSpinner = true;
    
    this.authService.signinUser(email, password)
    .then(data => {
      if(data) {
        this.showSpinner = false;
      }
    });
    
  }
}
