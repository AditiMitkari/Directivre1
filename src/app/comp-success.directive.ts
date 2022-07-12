import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private eRef:ElementRef) {}
  @HostListener('mouseleave')onmouseleave()
  {
    this.eRef.nativeElement.style.color="red"


   }

}
