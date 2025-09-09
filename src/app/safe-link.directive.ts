
import { Directive, ElementRef, input, inject } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onClick($event)'
  },
  hostDirectives: [LogDirective]
})
export class SafeLinkDirective {

    queryParam = input('myapp');

    private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor() {
        console.log('SafeLinkDirective constructor called!');
    }

    onClick(event: MouseEvent) {
        console.log('Clicked on a safe link!');
        alert('Clicked on a safe link!');

        const wantToProceed = window.confirm('This link might be unsafe. Do you want to proceed?');

        if(wantToProceed){
            // query parameter
            //const url = (event.target as HTMLAnchorElement).href;
            const url = this.hostElement.nativeElement.href;
            this.hostElement.nativeElement.href = url + '?from=' + this.queryParam();
            return;
        }
        event.preventDefault();
    }



}

