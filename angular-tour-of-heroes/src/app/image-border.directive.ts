import {
  AfterViewChecked,
  AfterViewInit,
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
export class ImageBorderDirective implements AfterViewInit {
  @Input() component!: HTMLInputElement;

  constructor(private element: ElementRef) {}
  ngAfterViewInit(): void {
    this.component.hidden = true;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.filter = 'brightness(25%)';
    this.element.nativeElement.title = 'Click to upload';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.filter = 'initial';
    this.element.nativeElement.title = '';
  }

  @HostListener('click')
  onClick() {
    this.component.click();
  }
}
