import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GdkSharedModule } from '@gdk/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        GdkSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
