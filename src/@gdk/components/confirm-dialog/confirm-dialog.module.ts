import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { GdkConfirmDialogComponent } from '@gdk/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        GdkConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        GdkConfirmDialogComponent
    ],
})
export class GdkConfirmDialogModule
{
}
