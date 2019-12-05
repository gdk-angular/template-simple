import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, filter, take, takeUntil } from 'rxjs/operators';

import { GdkConfigService } from '@gdk/services/config.service';
import { GdkNavigationService } from '@gdk/components/navigation/navigation.service';
import { GdkPerfectScrollbarDirective } from '@gdk/directives/gdk-perfect-scrollbar/gdk-perfect-scrollbar.directive';
import { GdkSidebarService } from '@gdk/components/sidebar/sidebar.service';

@Component({
    selector     : 'navbar-vertical-style-1',
    templateUrl  : './style-1.component.html',
    styleUrls    : ['./style-1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalStyle1Component implements OnInit, OnDestroy
{
    gdkConfig: any;
    navigation: any;

    // Private
    private _gdkPerfectScrollbar: GdkPerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {GdkConfigService} _gdkConfigService
     * @param {GdkNavigationService} _gdkNavigationService
     * @param {GdkSidebarService} _gdkSidebarService
     * @param {Router} _router
     */
    constructor(
        private _gdkConfigService: GdkConfigService,
        private _gdkNavigationService: GdkNavigationService,
        private _gdkSidebarService: GdkSidebarService,
        private _router: Router
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Directive
    @ViewChild(GdkPerfectScrollbarDirective, {static: true})
    set directive(theDirective: GdkPerfectScrollbarDirective)
    {
        if ( !theDirective )
        {
            return;
        }

        this._gdkPerfectScrollbar = theDirective;

        // Update the scrollbar on collapsable item toggle
        this._gdkNavigationService.onItemCollapseToggled
            .pipe(
                delay(500),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this._gdkPerfectScrollbar.update();
            });

        // Scroll to the active item position
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                    setTimeout(() => {
                        this._gdkPerfectScrollbar.scrollToElement('navbar .nav-link.active', -120);
                    });
                }
            );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                    if ( this._gdkSidebarService.getSidebar('navbar') )
                    {
                        this._gdkSidebarService.getSidebar('navbar').close();
                    }
                }
            );

        // Subscribe to the config changes
        this._gdkConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.gdkConfig = config;
            });

        // Get current navigation
        this._gdkNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._gdkNavigationService.getCurrentNavigation();
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar opened status
     */
    toggleSidebarOpened(): void
    {
        this._gdkSidebarService.getSidebar('navbar').toggleOpen();
    }

    /**
     * Toggle sidebar folded status
     */
    toggleSidebarFolded(): void
    {
        this._gdkSidebarService.getSidebar('navbar').toggleFold();
    }
}
