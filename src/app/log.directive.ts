import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onLog()'
  }
})
export class LogDirective {
  private elementRef = inject(ElementRef);

  constructor() { }

  onLog(event: MouseEvent) {
    console.log('Element clicked:');
    console.log('Element details:', this.elementRef.nativeElement);
  }
}
