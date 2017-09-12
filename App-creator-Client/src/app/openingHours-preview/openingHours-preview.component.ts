import { Component,Input } from '@angular/core';
import {GlobalDataService} from '../global-data';
import {OpeningHours} from '../../models/opening-hours-model';

@Component({
  selector: 'app-preview-openingHours',
  templateUrl: './openingHours-preview.component.html',
  styleUrls: ['./openingHours-preview.component.css']
})

/*
  Responsible for opening hours page preview area and view
*/

export class OpeningHoursPreviewComponent { 
    constructor(public globalData:GlobalDataService){
    }
}
  