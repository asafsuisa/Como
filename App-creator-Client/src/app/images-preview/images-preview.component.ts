import { Component,Input } from '@angular/core';
import {GlobalDataService} from '../global-data';


@Component({
  selector: 'app-preview-images',
  templateUrl: './images-preview.component.html',
  styleUrls: ['./images-preview.component.css']
})
/*
  Responsible for images page preview area and view
*/
export class ImagesPreviewComponent {
    constructor(public globalData:GlobalDataService){}

}