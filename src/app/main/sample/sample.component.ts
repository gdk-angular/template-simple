import { Component } from '@angular/core';

import { GdkTranslationLoaderService } from '@gdk/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class SampleComponent
{
    /**
     * Constructor
     *
     * @param {GdkTranslationLoaderService} _gdkTranslationLoaderService
     */
    constructor(
        private _gdkTranslationLoaderService: GdkTranslationLoaderService
    )
    {
        this._gdkTranslationLoaderService.loadTranslations(english, turkish);
    }
}
