import { ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GdkNavigationItem } from '@gdk/types';
import { GdkNavigationService } from '@gdk/components/navigation/navigation.service';

@Component({
    selector   : 'gdk-nav-vertical-item',
    templateUrl: './item.component.html',
    styleUrls  : ['./item.component.scss']
})
export class GdkNavVerticalItemComponent implements OnInit, OnDestroy
{
    @HostBinding('class')
    classes = 'nav-item';

    @Input()
    item: GdkNavigationItem;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     */

    /**
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {GdkNavigationService} _gdkNavigationService
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _gdkNavigationService: GdkNavigationService
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
        // Subscribe to navigation item
        merge(
            this._gdkNavigationService.onNavigationItemAdded,
            this._gdkNavigationService.onNavigationItemUpdated,
            this._gdkNavigationService.onNavigationItemRemoved
        ).pipe(takeUntil(this._unsubscribeAll))
         .subscribe(() => {

             // Mark for check
             this._changeDetectorRef.markForCheck();
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
