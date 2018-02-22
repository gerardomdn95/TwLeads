import { Component, OnInit, Input } from '@angular/core';
import { SeoService } from '../services/seo.service';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { Card } from '../models/app.card-model';
import { CardService } from '../services/card.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-campaign-system',
  templateUrl: './campaign-system.component.html',
  styleUrls: ['./campaign-system.component.css']
})
export class CampaignSystemComponent implements OnInit {

  @Input() cardData: any;
  public model: any;
  card: any;
  APIENDPOINT = 'http://187.162.208.218:4200/twitter/card';
  show = false;
  jsonCard: any;

  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private seo: SeoService, private storage: AngularFireStorage,
    private cardService: CardService, private http: HttpClient) { }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }

    // The storage path
    const path = `campaigns/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'Koomkin campaign image.' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    // The file's download URL
    this.downloadURL = this.task.downloadURL();
    console.log(this.downloadURL);
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  ngOnInit() {
    this.model = new Card(this.cardData.user_id, this.cardData.title,
      this.cardData.description, this.cardData.image_url);
    this.seo.generateTags({
      title: 'Twitter Card System',
      description: 'Genera tu tarjeta dinámica.',
      image: '',
      slug: 'contact-page'
    });
  }

  postCard() {
    console.log(this.model);
    this.http.post(this.APIENDPOINT, {
      description: this.cardData.description,
      image: 'https://drive.google.com/uc?id=1IsJTXEU5XLece1y_4f8MmrDjuiUkb5Pw',
      title: this.cardData.title,
      user_id: 5,
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
