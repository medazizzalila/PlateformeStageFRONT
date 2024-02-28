import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[autoGrow]'
})
export class AutoGrowDirective {

  constructor(private elementRef: ElementRef) {}

  @HostListener('input') onInput() {
    this.adjust();
  }

  ngAfterViewInit() {
    setTimeout(() => this.adjust(), 0);
  }

  adjust() {
    const element = this.elementRef.nativeElement;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  }
}
