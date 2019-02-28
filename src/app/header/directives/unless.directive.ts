import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

@Input() set appUnless(condition: boolean){ // still is property. 'set' changes property into method whenever property changes
  if(!condition){                           // Needs to receive value property would normally get
                                            // this property MUST be the same as the directive
    this.vcRef.createEmbeddedView(this.templateRef);

  } else {

    this.vcRef.clear();
  }

}

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

  // templateRef is reference to the template itself
  // vcref marks place where we place directive in document
}
