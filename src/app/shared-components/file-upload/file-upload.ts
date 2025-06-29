import { Component, ElementRef, EventEmitter, Injectable, Injector, Input, input, OnInit, Output, ViewChild } from '@angular/core';
import { AppMaterialModule } from '../../helper/app-material/app-material-module';
import { Constants } from '../../helper/constants';

@Component({
  standalone: true,
  selector: 'app-file-upload',
  imports: [AppMaterialModule],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.scss'
})

@Injectable({
  providedIn:'root'
})
export class FileUpload implements OnInit {

  @Input() fileMaxCount = 1;
  @Input() FileMaxSize = 30;
  @Input() Tooltip = '';
  @Input() fileName = '';
  @Input() uploadtype = 'single';
  @Input() accept = 'docs'
  @Output() fileRemoved: EventEmitter<any> = new EventEmitter();
  @Output() validationError: EventEmitter<any> = new EventEmitter();
  filetype = ".jpg,image/png,.jpeg,.pdf,.ppt,.xlsx,.docx"
  acceptExtension = this.filetype;

  File_type: string = '';
  @ViewChild('fileInput') fileUpload!: ElementRef<HTMLInputElement>;
  files: [] | any = [] 
  fileslength: any;

  ngOnInit(): void {
    this.fileslength = 0;
    this.fileName = '';
    this.files = [];
    console.log(this.files.length);
  }

  // valid file Type
  filetypevalid(type: any) {
    console.log(this.accept)
    if (this.accept == "image") {
      return type.match(Constants.Imagetype)
    }
    else if (this.accept == "docs") {
      return type.match(Constants.Docstype)
    }
    else {
      return type.match(Constants.Sheettype)
    }
    return false
  }

  uploadfile(event:any): void {
    const file = event.files?.[0];
    console.log(event.files?.[0])
    

    // file format function
    function formatBytes(bytes: number): string {
      const UNITS = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const factor = 1024;
      let index = 0;

      while (bytes >= factor && index < UNITS.length - 1) {
        bytes /= factor;
        index++;
      }

      return `${parseFloat(bytes.toFixed(2))} ${UNITS[index]}`;
    }

    
    if (this.filetypevalid(file?.type)) {
      console.log(file?.type)
      this.File_type = `${file!.name} (${formatBytes(file!.size)})`;
      this.fileName = `${file!.name} (${formatBytes(file!.size)})`;
      this.files.push(`${file!.name} (${formatBytes(file!.size)})`);
      this.fileslength = this.files.length
      console.log(this.File_type);
    }
    console.log(this.files);
  }

  // function of open window native file explore
  showPhotoPickerFilePicker(): void {
    const fileInput = this.fileUpload?.nativeElement as HTMLElement;
    fileInput.click();
  }

  clearfile() {
    this.ngOnInit()
  }

}
