import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {
  @Input('appProductCard') BGCOlor: string = "red";
  constructor(private elenRef: ElementRef) {
    elenRef.nativeElement.style.boxShadow = "0 0 9px blue"
    elenRef.nativeElement.style.border = "2px solid blue";
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.elenRef.nativeElement.style.boxShadow = "0 0 15px blue"
    this.elenRef.nativeElement.style.border = `6px solid ${this.BGCOlor}`;
  }
  @HostListener('mouseout') onMouseOut() {
    this.elenRef.nativeElement.style.boxShadow = "0 0 9px blue"
    this.elenRef.nativeElement.style.border = "2px solid blue";

  }
}
