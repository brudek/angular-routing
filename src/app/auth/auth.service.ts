import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(private angularFire: AngularFireAuth, private router: Router) {
    angularFire.authState.subscribe( user => {
      this.user = user;
    });
   }

  login(email: string, password: string) {
    this.angularFire.auth.signInWithEmailAndPassword(email, password)
      .then( user => {
        console.log(user);
        this.router.navigate(['/home']);
      })
      .catch( err => {
        console.log(err);
      });
  }

  signup(email: string, password: string) {
    this.angularFire.auth.createUserWithEmailAndPassword(email, password)
      .then( user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      })
    ;
  }

  logout() {
    this.angularFire.auth.signOut();
  }
}
