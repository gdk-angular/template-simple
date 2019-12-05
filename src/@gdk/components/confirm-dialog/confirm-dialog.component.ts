import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector   : 'gdk-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class GdkConfirmDialogComponent
{
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<GdkConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<GdkConfirmDialogComponent>
    )
    {
    }

}
