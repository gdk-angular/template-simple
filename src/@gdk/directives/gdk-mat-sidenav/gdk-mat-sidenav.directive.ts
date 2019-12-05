import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GdkMatchMediaService } from '@gdk/services/match-media.service';
import { GdkMatSidenavHelperService } from '@gdk/directives/gdk-mat-sidenav/gdk-mat-sidenav.service';

@Directive({
    selector: '[gdkMatSidenavHelper]'
})
export class GdkMatSidenavHelperDirective implements OnInit, OnDestroy
{
    @HostBinding('class.mat-is-locked-open')
    isLockedOpen: boolean;

    @Input()
    gdkMatSidenavHelper: string;

    @Input()
    matIsLockedOpen: string;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {GdkMatchMediaService} _gdkMatchMediaService
     * @param {GdkMatSidenavHelperService} _gdkMatSidenavHelperService
     * @param {MatSidenav} _matSidenav
     * @param {MediaObserver} _mediaObserver
     */
    constructor(
        private _gdkMatchMediaService: GdkMatchMediaService,
        private _gdkMatSidenavHelperService: GdkMatSidenavHelperService,
        private _matSidenav: MatSidenav,
        private _mediaObserver: MediaObserver
    )
    {
        // Set the defaults
        this.isLockedOpen = true;

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
        // Register the sidenav to the service
        this._gdkMatSidenavHelperService.setSidenav(this.gdkMatSidenavHelper, this._matSidenav);

        if ( this.matIsLockedOpen && this._mediaObserver.isActive(this.matIsLockedOpen) )
        {
            this.isLockedOpen = true;
            this._matSidenav.mode = 'side';
            this._matSidenav.toggle(true);
        }
        else
        {
            this.isLockedOpen = false;
            this._matSidenav.mode = 'over';
            this._matSidenav.toggle(false);
        }

        this._gdkMatchMediaService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                if ( this.matIsLockedOpen && this._mediaObserver.isActive(this.matIsLockedOpen) )
                {
                    this.isLockedOpen = true;
                    this._matSidenav.mode = 'side';
                    this._matSidenav.toggle(true);
                }
                else
                {
                    this.isLockedOpen = false;
                    this._matSidenav.mode = 'over';
                    this._matSidenav.toggle(false);
                }
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

@Directive({
    selector: '[gdkMatSidenavToggler]'
})
export class GdkMatSidenavTogglerDirective
{
    @Input()
    gdkMatSidenavToggler: string;

    /**
     * Constructor
     *
     * @param {GdkMatSidenavHelperService} _gdkMatSidenavHelperService
     */
    constructor(
        private _gdkMatSidenavHelperService: GdkMatSidenavHelperService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On click
     */
    @HostListener('click')
    onClick(): void
    {
        this._gdkMatSidenavHelperService.getSidenav(this.gdkMatSidenavToggler).toggle();
    }
}
