import { Component, OnInit } from '@angular/core';
import { Lead } from '../models/app.lead-model';

@Component({
  selector: 'app-no-social-media',
  templateUrl: './no-social-media.component.html',
  styleUrls: ['./no-social-media.component.css']
})
export class NoSocialMediaComponent implements OnInit {

  model: any;
  public show: boolean;

  public showCompany(e): void {
    if (e) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  constructor() { }

  ngOnInit() {
    this.model = new Lead(null, null, null, null, null, null, null);
  }

}
