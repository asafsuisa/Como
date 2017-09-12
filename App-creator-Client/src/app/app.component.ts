import { Component } from '@angular/core';
import { About } from '../models/about-model';
import { Router } from '@angular/router';
import { GlobalDataService } from './global-data';
import { FileUploadService } from '../services/fileUpload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*
  Main page view
*/
export class AppComponent {
  title = 'app';
  fileToUpload: File;
  inUploadProgress: boolean = false;

  constructor(private router: Router, private globalData: GlobalDataService,
    private fileUploadService: FileUploadService) {

  }

  /* Update to local file variable every upload of new file.  */
  fileChangeEvent(event: any) {
    this.fileToUpload = event.target.files[0];
  }

   /* Send request to server api for getting thw two main colors from the given file */
  upload() {
    if (this.fileToUpload) {
      this.inUploadProgress = true;
      this.fileUploadService.uploadFile(this.fileToUpload).subscribe(Response => {
        this.globalData.background_color = Response[0];
        this.globalData.font_color = Response[1];
        this.inUploadProgress = false;
      });
    }
  }
  /*Reset app background and font colors to default - white background and black font */
  resetColorToDefult() {
    this.globalData.background_color = "#FFFFFF";
    this.globalData.font_color = "#000000";
  }

}
