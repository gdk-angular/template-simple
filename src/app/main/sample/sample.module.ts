import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { GdkSharedModule } from '@gdk/shared.module';

import { SampleComponent } from './sample.component';

const routes = [
    {
        path     : 'sample',
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        GdkSharedModule
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}
