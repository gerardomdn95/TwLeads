import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { not } from '@angular/compiler/src/output/output_ast';
import { Lead } from '../models/app.lead-model';

@Injectable()
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  router: any;
  authService: any;
  public koomkin = false;
  private userDetails: firebase.User = null;
  private user: Observable<firebase.User>;
  public show_company: boolean;
  public model: any;

  public showCompany(e): void {
    if (e) {
      this.show_company = true;
    } else {
      this.show_company = false;
    }
  }

  constructor(private _firebaseAuth: AngularFireAuth) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  signInWithKoomkin() {
    this.koomkin = true;
  }

  signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    return this._firebaseAuth.auth.signInWithPopup(
      provider
    );
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this._firebaseAuth.auth.signOut();
  }

  ngOnInit() {
    this.model = new Lead(null, this.userDetails.displayName, this.userDetails.providerData[0].email,
      null, null, null, null);
  }

  get currentLead() {
    return console.log(this.model);
  }

}
