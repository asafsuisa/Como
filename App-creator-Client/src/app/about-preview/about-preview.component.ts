import { Component,Input } from '@angular/core';
import {About} from '../../models/about-model';
import {GlobalDataService} from '../global-data';
@Component({
  selector: 'app-preview-about',
  templateUrl: './about-preview.component.html',
  styleUrls: ['./about-preview.component.css']
})
/*
  Responsible for about page preview area and view
*/
export class AboutPreviewComponent {
    constructor(public globalData:GlobalDataService){}
}
 