import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector   : 'gdk-nav-horizontal-item',
    templateUrl: './item.component.html',
    styleUrls  : ['./item.component.scss']
})
export class GdkNavHorizontalItemComponent
{
    @HostBinding('class')
    classes = 'nav-item';

    @Input()
    item: any;

    /**
     * Constructor
     */
    constructor()
    {

    }
}
