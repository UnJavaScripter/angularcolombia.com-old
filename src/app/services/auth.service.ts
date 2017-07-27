import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable ()
export class AuthService {
  
  user : firebase.User;
  
  constructor ( public afAuth : AngularFireAuth,
                private router : Router ) {
  }
  
  /**
   * Metodo Login Google
   * @author Carlos Andres
   * @version 22/07/2017
   */
  login () {
    this.afAuth.auth.signInWithPopup ( new firebase.auth.GoogleAuthProvider () )
      .then ( ( data ) => {
        this.user = data.user;
        console.log ( this.user );
      } );
    // this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.pass);
  }
  
  /**
   * Metodo de Logout
   * @author Carlos Andres
   * @version 22/07/2017
   */
  logout () {
    this.afAuth.auth.signOut ();
    this.user = undefined;
    this.router.navigate ( [ 'home' ] );
  }
  
  isLoggin () {
    return ( !this.user ) ? false : true;
  }
}
