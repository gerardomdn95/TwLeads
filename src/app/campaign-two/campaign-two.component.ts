import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-campaign-two',
  templateUrl: './campaign-two.component.html',
  styleUrls: ['./campaign-two.component.css']
})
export class CampaignTwoComponent implements OnInit {

  ref: AngularFireObject<any>;
  data$: Observable<any>;

  constructor(private seo: SeoService, private db: AngularFireDatabase) { }

  ngOnInit() {
    const ref = this.db.object('demo');
    this.data$ = ref.valueChanges();

    this.data$.take(1).subscribe(data => {
      this.seo.generateTags({
        title: data.title,
        description: data.description,
        image: data.image,
        slug: 'firebase-page'
      });
    });
  }

}
