import { Component,Input } from '@angular/core';
import {GlobalDataService} from '../global-data';
@Component({
  selector: 'app-input-about',
  templateUrl: './about-input.component.html',
  styleUrls: ['./about-input.component.css']
})
/*
  Responsible for about page input area and view
*/
export class AboutInputComponent {
    constructor(public globalData:GlobalDataService){}
    
}
