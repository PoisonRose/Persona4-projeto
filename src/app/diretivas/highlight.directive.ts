import { Directive, HostBinding, HostListener, } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.background-color') backgroundColor = '';
  @HostBinding('style.color') fontColor = '';
  @HostBinding('style.transition') transition = 'all 0.5s';

  @HostListener('mouseenter') transicao(){
    this.backgroundColor = '#ffff80';
    this.fontColor = '#faa622';
  }
  @HostListener('mouseleave') volta(){
    this.backgroundColor = '';
    this.fontColor = '';
  }
  constructor() {

   }

}
