import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { GdkDemoContentComponent } from './demo-content/demo-content.component';
import { GdkDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';

@NgModule({
    declarations: [
        GdkDemoContentComponent,
        GdkDemoSidebarComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports     : [
        GdkDemoContentComponent,
        GdkDemoSidebarComponent
    ]
})
export class GdkDemoModule
{
}
