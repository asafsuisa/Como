import { Injectable } from '@angular/core';
import {About} from '../models/about-model';
import {Image} from '../models/images-model';
import {OpeningHours}  from '../models/opening-hours-model';
/*
   Mutual resources for all the components and services - keeps the current data.
*/

@Injectable()
export class GlobalDataService {
    public currentAbout:About={};
    public currentImages:Image[]=[];
    public imageSearch:string;
    public imagesTitle:string;
    public openingHours:OpeningHours[]=[];
    public openingHoursTitle:string;
    public background_color:string;
    public font_color:string;
}