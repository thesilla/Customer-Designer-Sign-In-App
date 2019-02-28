import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @Input() defaultColor: string = 'red';
  @Input() highlightColor: string = 'blue';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); // can add a 4th argument for importance flags
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.highlightColor;
  }

}
