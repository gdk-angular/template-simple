import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { GdkConfigService } from '@gdk/services/config.service';
import { GdkNavigationService } from '@gdk/components/navigation/navigation.service';
import { GdkSidebarService } from '@gdk/components/sidebar/sidebar.service';

@Component({
    selector     : 'navbar-horizontal-style-1',
    templateUrl  : './style-1.component.html',
    styleUrls    : ['./style-1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarHorizontalStyle1Component implements OnInit, OnDestroy
{
    gdkConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {GdkConfigService} _gdkConfigService
     * @param {GdkNavigationService} _gdkNavigationService
     * @param {GdkSidebarService} _gdkSidebarService
     */
    constructor(
        private _gdkConfigService: GdkConfigService,
        private _gdkNavigationService: GdkNavigationService,
        private _gdkSidebarService: GdkSidebarService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get current navigation
        this._gdkNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._gdkNavigationService.getCurrentNavigation();
            });

        // Subscribe to the config changes
        this._gdkConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.gdkConfig = config;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
