import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CardService {

  APIENDPOINT = 'http://187.162.208.218:4200/twitter/card';

  constructor(private http: HttpClient) { }

  getCard(id) {
    return this.http.get(this.APIENDPOINT + '/?' + id);
  }

  postCard(model) {
    return this.http.post(this.APIENDPOINT, model);
  }

}
