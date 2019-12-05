import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { GdkSearchBarModule, GdkShortcutsModule } from '@gdk/components';
import { GdkSharedModule } from '@gdk/shared.module';

import { ToolbarComponent } from 'app/layout/components/toolbar/toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        GdkSharedModule,
        GdkSearchBarModule,
        GdkShortcutsModule
    ],
    exports     : [
        ToolbarComponent
    ]
})
export class ToolbarModule
{
}
