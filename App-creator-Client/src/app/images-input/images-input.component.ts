import { Component,Input } from '@angular/core';
import {GlobalDataService} from '../global-data';
import {pixabayService} from '../../services/pixabay.service';

@Component({
  selector: 'app-input-images',
  templateUrl: './images-input.component.html',
  styleUrls: ['./images-input.component.css']
})
/*
  Responsible for images page input area and view
*/

export class ImagesInputComponent {
    constructor(public globalData:GlobalDataService,
                public pixaRestService:pixabayService){}
    

     /* 
     Send request to pixabay api for getting picture according to search input field and return
     matching results. 
     */        
    getImages(search:string)
    {
      this.pixaRestService.getImagesByQuery(search).subscribe(response=>
      {
          if(response["totalHits"]>0)
            {
              this.globalData.currentImages=response["hits"];
            }
          else{
              alert("There are no matching images");
          }
      });
    }
}
  