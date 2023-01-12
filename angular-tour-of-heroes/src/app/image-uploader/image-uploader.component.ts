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
      this.source = this.fileReader.result as string;
      this.pictureBase64.emit(this.fileReader.result as string);
    };
    this.fileReader.readAsDataURL(event.target.files[0]);
  }
}
