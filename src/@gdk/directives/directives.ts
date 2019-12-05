import { NgModule } from '@angular/core';

import { GdkIfOnDomDirective } from '@gdk/directives/gdk-if-on-dom/gdk-if-on-dom.directive';
import { GdkInnerScrollDirective } from '@gdk/directives/gdk-inner-scroll/gdk-inner-scroll.directive';
import { GdkPerfectScrollbarDirective } from '@gdk/directives/gdk-perfect-scrollbar/gdk-perfect-scrollbar.directive';
import { GdkMatSidenavHelperDirective, GdkMatSidenavTogglerDirective } from '@gdk/directives/gdk-mat-sidenav/gdk-mat-sidenav.directive';

@NgModule({
    declarations: [
        GdkIfOnDomDirective,
        GdkInnerScrollDirective,
        GdkMatSidenavHelperDirective,
        GdkMatSidenavTogglerDirective,
        GdkPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        GdkIfOnDomDirective,
        GdkInnerScrollDirective,
        GdkMatSidenavHelperDirective,
        GdkMatSidenavTogglerDirective,
        GdkPerfectScrollbarDirective
    ]
})
export class GdkDirectivesModule
{
}
