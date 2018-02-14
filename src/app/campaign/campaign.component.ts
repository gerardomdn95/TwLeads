import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'Pisos de madera',
      // tslint:disable-next-line:max-line-length
      description: 'lastificadora Argentina es una empresa con más de 70 años de reconocida trayectoria y experiencia en el negocio de la venta de pisos de madera.',
      image: 'https://www.como-limpiar.com/wp-content/uploads/2010/04/pisosmadera10-640x344.jpg',
      slug: 'contact-page'
    });
  }

}
