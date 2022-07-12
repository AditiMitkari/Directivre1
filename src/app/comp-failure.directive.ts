import { Directive, ElementRef, HostListener,} from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private eRef:ElementRef){}
  @HostListener('mouseenter')onmouseenter()
   {
    this.eRef.nativeElement.style.color="green"
    }



}