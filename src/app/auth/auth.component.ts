import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {

  public showSignIn: boolean = true;
  public showSignUp: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public onGoToSignIn(): void{
    this.showSignIn = true;
    this.showSignUp = false;
  }

  public onGoToSignUp(): void{
    this.showSignIn = false;
    this.showSignUp = true;
  }

}
