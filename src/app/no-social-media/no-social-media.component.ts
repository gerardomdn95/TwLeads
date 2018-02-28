import { Component, OnInit } from '@angular/core';
import { Lead } from '../models/app.lead-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-no-social-media',
  templateUrl: './no-social-media.component.html',
  styleUrls: ['./no-social-media.component.css']
})
export class NoSocialMediaComponent implements OnInit {

  model: any;
  public show_company: boolean;
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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.model = new Lead(null, null, null, null, null, null, null);
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
