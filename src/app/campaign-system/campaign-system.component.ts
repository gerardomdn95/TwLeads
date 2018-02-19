import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-campaign-system',
  templateUrl: './campaign-system.component.html',
  styleUrls: ['./campaign-system.component.css']
})
export class CampaignSystemComponent implements OnInit {

  title = 'Koomkin';
  body = 'Ecuentra productos y servicios de calidad.';
  show = false;

  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private seo: SeoService, private storage: AngularFireStorage) { }

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
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  hideElement() {
    this.show = true;
  }

  ngOnInit() {
    this.seo.generateTags({
      title: 'Contact Page',
      description: 'Hola Hola',
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'contact-page'
    });
  }

}
