import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  logCurrentUser() {
    console.log(this.afAuth.auth);
  }

  ngOnInit() {
    // let ui = new firebaseui.auth.AuthUI(firebase.auth());

    // let uiConfig = {
    //   callbacks: {
    //     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    //       // User successfully signed in.
    //       // Return type determines whether we continue the redirect automatically
    //       // or whether we leave that to developer to handle.
    //       return true;
    //     },
    //     uiShown: function() {
    //       // The widget is rendered.
    //       // Hide the loader.
    //       document.getElementById('loader').style.display = 'none';
    //     }
    //   },
    //   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    //   signInFlow: 'popup',
    //   signInSuccessUrl: '<url-to-redirect-to-on-success>',
    //   signInOptions: [
    //     // Leave the lines as is for the providers you want to offer your users.
    //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //     firebase.auth.GithubAuthProvider.PROVIDER_ID,
    //     firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //     firebase.auth.PhoneAuthProvider.PROVIDER_ID
    //   ],
    //   // Terms of service url.
    //   tosUrl: '<your-tos-url>',
    //   // Privacy policy url.
    //   privacyPolicyUrl: '<your-privacy-policy-url>'
    // };

    // ui.start('#firebaseui-auth-container', uiConfig);
  }

}
