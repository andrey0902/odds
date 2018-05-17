import {
  ComponentFactory, ComponentFactoryResolver, Directive, ElementRef, HostListener, Input, ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[oddsInsertComponent]'
})
export class InsertComponentDirective {
  @Input() component: any;
  private isInsert = false;
  constructor(private el: ElementRef,
              private viewContainer: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  @HostListener('click') public toggleComponent() {
    console.log('click', this.isInsert);
    if (this.isInsert) {
      this.clear();
      this.toggleValue(this.isInsert);
    } else {
      this.insert();
      this.toggleValue(this.isInsert);
    }
  }

  public insert() {
    const component: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(this.component);

    const done = this.viewContainer.createComponent(component);
    // done.instance.viewContainer = this.viewContainer;

  }


  public clear() {
    this.viewContainer.clear();
  }

  private toggleValue(value) {
    this.isInsert = !value;
  }

}
