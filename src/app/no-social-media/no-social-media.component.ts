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

  public showCompany(e): void {
    if (e) {
      this.show_company = true;
    } else {
      this.show_company = false;
    }
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.model = new Lead(null, null, null, null, null, null, null);
  }

}
