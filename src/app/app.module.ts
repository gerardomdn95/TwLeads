import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { FormsModule } from '@angular/forms';
import { AngularFireStorage, AngularFireStorageModule } from 'angularfire2/storage';

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
import { CampaignComponent } from './campaign/campaign.component';
import { SeoService } from './seo.service';
import { CampaignSystemComponent } from './campaign-system/campaign-system.component';
import { CampaignTwoComponent } from './campaign-two/campaign-two.component';
import { DropZoneDirective } from './drop-zone.directive';
import { NoSocialMediaComponent } from './no-social-media/no-social-media.component';

const routes: Routes = [
  { path: '', component: FormComponent, },
  { path: 'twitter', component: CampaignSystemComponent, },
  { path: 'campaign', component: CampaignComponent, },
  { path: 'noSocial', component:  NoSocialMediaComponent, }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavComponent,
    CampaignComponent,
    CampaignSystemComponent,
    CampaignTwoComponent,
    DropZoneDirective,
    NoSocialMediaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFontAwesomeModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireStorageModule,
  ],
  providers: [AuthService, SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
