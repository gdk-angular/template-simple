import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { GdkSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        GdkSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        GdkSearchBarComponent
    ]
})
export class GdkSearchBarModule
{
}
