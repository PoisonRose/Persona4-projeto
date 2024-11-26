import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @HostBinding('style.transform') transform = '';
  @HostBinding('style.transition') transition = ' all 0.5s';

  @HostListener('mouseenter') desliza(){
    this.transform = 'translateY(-10px)';
  }
  @HostListener('mouseleave') volta(){
    this.transform = '';
  }
  

  constructor() { }

}
