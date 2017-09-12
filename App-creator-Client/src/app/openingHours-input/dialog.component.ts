import { Component, Inject, ElementRef, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { OpeningHours } from '../../models/opening-hours-model';

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
    /*
        Dialog (pop-up window) for edit or add open dialog elements
    */

export class DialogOpeningHoursDialog {

    Weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    currentRow: OpeningHours;
    title: string;
    @ViewChild('f') ngform;
    showAllAlertMessages:boolean=false;

    constructor(
        public dialogRef: MdDialogRef<DialogOpeningHoursDialog>,
        @Inject(MD_DIALOG_DATA) public data: any, public el: ElementRef) { }

    invalidElement() {
        let firstElement: any = this.el.nativeElement.querySelector('form');
        let b = firstElement.querySelector('.ng-invalid');
        let c = b.querySelector('input');
        if (c) // input element
        {
            c.focus();
        }
        else //select element
        {
            b.focus();

        }
    }
    close(row: OpeningHours): void {
        if (!this.ngform.valid) {
            this.showAllAlertMessages = true;
            this.invalidElement();
        }
        else {
            this.dialogRef.close(row);
        }
    }

}
