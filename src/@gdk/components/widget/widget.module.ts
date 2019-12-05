import { NgModule } from '@angular/core';

import { GdkWidgetComponent } from './widget.component';
import { GdkWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        GdkWidgetComponent,
        GdkWidgetToggleDirective
    ],
    exports     : [
        GdkWidgetComponent,
        GdkWidgetToggleDirective
    ],
})
export class GdkWidgetModule
{
}
