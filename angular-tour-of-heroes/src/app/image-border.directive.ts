import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
} from '@angular/core';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';

@Directive({
  selector: '[appImageBorder]',
})
export class ImageBorderDirective {
  @Input() component!: ImageUploaderComponent;

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log(this.element.nativeElement);
    this.element.nativeElement.style.filter = 'brightness(25%)';
    this.element.nativeElement.title = 'Click to upload';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log(this.element.nativeElement);

    this.element.nativeElement.style.filter = 'initial';
    this.element.nativeElement.title = '';
  }

  @HostListener('click')
  onClick() {
    document.getElementById('img')!.click();
  }
}
