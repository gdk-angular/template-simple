import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { GdkDirectivesModule } from '@gdk/directives/directives';
import { GdkPipesModule } from '@gdk/pipes/pipes.module';

@NgModule({
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        GdkDirectivesModule,
        GdkPipesModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        GdkDirectivesModule,
        GdkPipesModule
    ]
})
export class GdkSharedModule
{
}
