import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CardService {

  public cardData: any;
  APIENDPOINT = 'http://187.162.208.218:4200/twitter/card';
  id: number;

  constructor(private http: HttpClient) { }

  public getCard(id) {
    this.http.get(this.APIENDPOINT + '?user_id=' + id).subscribe(data => {
      this.cardData = data;
      console.log(this.cardData);
    });
  }

  postCard(model) {
    return this.http.post(this.APIENDPOINT, model);
  }

}
