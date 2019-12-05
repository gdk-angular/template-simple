import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { GdkProgressBarComponent } from './progress-bar.component';

@NgModule({
    declarations: [
        GdkProgressBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatProgressBarModule
    ],
    exports     : [
        GdkProgressBarComponent
    ]
})
export class GdkProgressBarModule
{
}
