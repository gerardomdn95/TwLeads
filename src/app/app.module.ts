import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { FormsModule } from '@angular/forms';
import { AngularFireStorage, AngularFireStorageModule } from 'angularfire2/storage';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from './services/card.service';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';
import { Router, Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SeoService } from './services/seo.service';
import { NoSocialMediaComponent } from './no-social-media/no-social-media.component';

const routes: Routes = [
  { path: '', component: FormComponent, },
  { path: 'noSocial', component:  NoSocialMediaComponent, }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavComponent,
    NoSocialMediaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFontAwesomeModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireStorageModule,
  ],
  providers: [AuthService, SeoService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
