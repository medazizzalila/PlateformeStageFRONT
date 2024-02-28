import { Directive, ElementRef, HostListener, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[contenteditableModel]',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ContenteditableModelDirective), multi: true }
  ]
})
export class ContenteditableModelDirective implements ControlValueAccessor {
  private onChange: (value: string) => void;
  private onTouched: () => void;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('input')
  onInput(): void {
    const value = this.elementRef.nativeElement.innerText;
    this.onChange(value);
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }

  writeValue(value: string): void {
    const normalizedValue = value == null ? '' : value;
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', normalizedValue);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
