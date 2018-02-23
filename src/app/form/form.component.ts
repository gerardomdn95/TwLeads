import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { not } from '@angular/compiler/src/output/output_ast';
import { Lead } from '../models/app.lead-model';
import { HttpClient } from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  router: any;
  authService: any;
  private userDetails: firebase.User = null;
  private user: Observable<firebase.User>;
  public show_company: boolean;
  public model: any;
  APIENDPOINT = 'http://187.162.208.218:4200/twitter/lead';

  public showCompany(e): void {
    if (e) {
      this.show_company = true;
      this.model.company = '';
    } else {
      this.show_company = false;
      this.model.company = 'Particular';
    }
  }

  constructor(private _firebaseAuth: AngularFireAuth, private http: HttpClient) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          this.model = new Lead(null, this.userDetails.displayName, this.userDetails.providerData[0].email,
            this.userDetails.phoneNumber , 2545, null, null);
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
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
  }

  postLead() {
    console.log(this.model);
    this.http.post(this.APIENDPOINT, {
      user_id: 1,
      name: this.model.name,
      email: this.model.email,
      phone: this.model.phone,
      region_id: this.model.region_id,
      city: this.model.city,
      company: this.model.company
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }

}
