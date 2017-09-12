import { Component,Input } from '@angular/core';
import {GlobalDataService} from '../global-data';
import {OpeningHours} from '../../models/opening-hours-model';
import {DialogOpeningHoursDialog} from '../openingHours-input/dialog.component';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Observable }  from 'rxjs/Observable'; 

@Component({
  selector: 'app-input-openingHours',
  templateUrl: './openingHours-input.component.html',
  styleUrls: ['./openingHours-input.component.css']
})

/*
  Responsible for opening hours page input area and view
*/

export class OpeningHoursInputComponent { 
    constructor(public globalData:GlobalDataService,
    public dialog: MdDialog){}

  
    openDialog(row?: OpeningHours): Observable<any> {
        let dialogRef = this.dialog.open(DialogOpeningHoursDialog, {
            width: '600px'
        });
        if (row) { //Edit mode
            dialogRef.componentInstance.currentRow = Object.assign({},row);
             dialogRef.componentInstance.title = "Edit"
        }
        else { // Add new mode
            dialogRef.componentInstance.currentRow = {} as OpeningHours;
            dialogRef.componentInstance.title = "Add new"
        }
        return dialogRef.afterClosed();
    }

    /*Add new opening hour element to the global list */

    addNew(){
        this.openDialog().subscribe(result=>
        {
            if(result)
            {
                this.globalData.openingHours.push(result);
            }
        })
    }

    /*Delete opening hour element to the global list in the given index */
    deleteElement(index:number)
    {
        this.globalData.openingHours.splice(index,1);
    }

    editElement(index:number)
    {
        this.openDialog(this.globalData.openingHours[index]).subscribe(result=>
        {
            if(result)
            {
                Object.assign(this.globalData.openingHours[index],result);
            }
        })
    }
}