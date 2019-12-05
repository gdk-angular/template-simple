import { NgModule } from '@angular/core';

import { GdkSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        GdkSidebarComponent
    ],
    exports     : [
        GdkSidebarComponent
    ]
})
export class GdkSidebarModule
{
}
