import { Component } from '@angular/core';
import { FileUpload } from "../../shared-components/file-upload/file-upload";

@Component({
  selector: 'app-jpg-to-pdf',
  imports: [FileUpload],
  templateUrl: './jpg-to-pdf.html',
  styleUrl: './jpg-to-pdf.scss'
})
export class JpgToPdf {

  data: any;

  constructor(private file: FileUpload) {

  }

  ngOnInit() {

  }

  uploadfiles() {
    this.data = this.file.File_type
  }


}
