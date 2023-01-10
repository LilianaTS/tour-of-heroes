import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent implements OnInit {
  @Output() pictureBase64 = new EventEmitter<string>();
  @Input('image') image: string | null | undefined;
  source!: string | null;
  fileReader = new FileReader();
  constructor() {}

  ngOnInit(): void {
    this.source = this.image || null;
  }

  loadFile(event: any): void {
    this.fileReader.onload = () => {
      console.log('1');
      this.source = this.fileReader.result as string;
      console.log('2');
      this.pictureBase64.emit(this.fileReader.result as string);
      console.log('3');
    };
    console.log('4');
    console.log(event);
    console.log(event.target);
    this.fileReader.readAsDataURL(event.target.files[0]);
  }
}
