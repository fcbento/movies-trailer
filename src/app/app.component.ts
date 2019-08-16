import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'awesomeMovies';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAkTy-QE3ptt7wQJHDLnXc_zBGRC4e2Wso",
      authDomain: "movies-c6d33.firebaseapp.com"
    });
  }
}
