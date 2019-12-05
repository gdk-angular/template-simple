import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { GDK_CONFIG } from '@gdk/services/config.service';

@NgModule()
export class GdkModule
{
    constructor(@Optional() @SkipSelf() parentModule: GdkModule)
    {
        if ( parentModule )
        {
            throw new Error('GdkModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : GdkModule,
            providers: [
                {
                    provide : GDK_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
