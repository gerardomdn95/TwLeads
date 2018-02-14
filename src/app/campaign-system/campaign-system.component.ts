import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-campaign-system',
  templateUrl: './campaign-system.component.html',
  styleUrls: ['./campaign-system.component.css']
})
export class CampaignSystemComponent implements OnInit {

  title = 'Koomkin';
  body = 'Ecuentra productos y servicios de calidad.';

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'Contact Page',
      description: 'Hola Hola',
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'contact-page'
    });
  }

}
