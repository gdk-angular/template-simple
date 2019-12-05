import { NgModule } from '@angular/core';

import { GdkCountdownComponent } from '@gdk/components/countdown/countdown.component';

@NgModule({
    declarations: [
        GdkCountdownComponent
    ],
    exports: [
        GdkCountdownComponent
    ],
})
export class GdkCountdownModule
{
}
