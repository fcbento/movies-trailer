import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import swal from 'sweetalert';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) { }

  token: string;

  public signupUser(email: string, password: string) {

    firebase.auth().createUserWithEmailAndPassword(email, password)
    
    .then(response => {
        swal("Yayy", "You have successfully registered. Feel free to login right now.", "success");
        this.router.navigate(['/']);
        
      })
    
    .catch((error) => {
        swal("Something is wrong", error.message, "error");
        return error;
    });
  }

  public signinUser(email: string, password: string): Promise<any> {

    let login = firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        
        this.router.navigate(['/main/movies']);
        
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
          })
        return response;
      })
      .catch((error) => {
        swal("Something is wrong", error.message, "error");
        return error;
      });

    return login;
  }

  public getToken() {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
      });
    return this.token;
  }

  public isAuthenticated() {
    return this.token != null;
  }

  public logout() {
    firebase.auth().signOut();
    this.token = null;
  }

}
