import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[gdkWidgetToggle]'
})
export class GdkWidgetToggleDirective
{
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     */
    constructor(
        public elementRef: ElementRef
    )
    {
    }
}
