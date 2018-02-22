import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.css']
})
export class NewCampaignComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public cardData: any;
  APIENDPOINT = 'http://187.162.208.218:4200/twitter/card';
  id: number;
  show = false;


  public getCard(id) {
    this.http.get(this.APIENDPOINT + '?user_id=' + id).subscribe(data => {
      this.cardData = data;
      console.log(this.cardData);
    });
  }

  postCard(model) {
    return this.http.post(this.APIENDPOINT, model);
  }

  hideElement() {
    if (this.id != null) {
      this.show = true;
      this.getCard(this.id);
    } else {
      alert('Ingresa el id de usuario para continuar, el campo no puede estar vacío.');
    }
  }

  newElement() {
    if (this.id != null) {
      this.show = true;
    } else {
      alert('Ingresa el id de usuario para continuar, el campo no puede estar vacío.');
    }
  }

  ngOnInit() {}

}
