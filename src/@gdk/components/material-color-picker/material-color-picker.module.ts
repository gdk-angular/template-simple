import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { GdkPipesModule } from '@gdk/pipes/pipes.module';

import { GdkMaterialColorPickerComponent } from '@gdk/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        GdkMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        GdkPipesModule
    ],
    exports: [
        GdkMaterialColorPickerComponent
    ],
})
export class GdkMaterialColorPickerModule
{
}
