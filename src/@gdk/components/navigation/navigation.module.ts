import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';

import { GdkNavigationComponent } from './navigation.component';
import { GdkNavVerticalItemComponent } from './vertical/item/item.component';
import { GdkNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { GdkNavVerticalGroupComponent } from './vertical/group/group.component';
import { GdkNavHorizontalItemComponent } from './horizontal/item/item.component';
import { GdkNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        GdkNavigationComponent
    ],
    declarations: [
        GdkNavigationComponent,
        GdkNavVerticalGroupComponent,
        GdkNavVerticalItemComponent,
        GdkNavVerticalCollapsableComponent,
        GdkNavHorizontalItemComponent,
        GdkNavHorizontalCollapsableComponent
    ]
})
export class GdkNavigationModule
{
}
