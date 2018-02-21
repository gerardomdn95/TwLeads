import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeadService {

  APIENDPOINT = 'http://187.162.208.218:4200/twitter/lead';

  constructor(private http: HttpClient) { }

  postLead(model) {
    return this.http.post(this.APIENDPOINT, model);
  }

}
