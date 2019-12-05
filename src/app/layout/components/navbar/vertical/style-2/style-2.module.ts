import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { GdkNavigationModule } from '@gdk/components';
import { GdkSharedModule } from '@gdk/shared.module';

import { NavbarVerticalStyle2Component } from 'app/layout/components/navbar/vertical/style-2/style-2.component';

@NgModule({
    declarations: [
        NavbarVerticalStyle2Component
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        GdkSharedModule,
        GdkNavigationModule
    ],
    exports     : [
        NavbarVerticalStyle2Component
    ]
})
export class NavbarVerticalStyle2Module
{
}
