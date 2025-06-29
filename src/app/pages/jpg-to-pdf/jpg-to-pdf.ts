import { Component, ViewChild, viewChild } from '@angular/core';
import { FileUpload } from "../../shared-components/file-upload/file-upload";
import {last} from 'lodash'

@Component({
  selector: 'app-jpg-to-pdf',
  imports: [FileUpload],
  templateUrl: './jpg-to-pdf.html',
  styleUrl: './jpg-to-pdf.scss'
})
export class JpgToPdf {

  Images: any ;

  @ViewChild('jpgtopdffile', { static: false })
  jpgtopdffile!: FileUpload;

  constructor(private file: FileUpload) {

  }

  ngOnInit() {

  }

  getfiledetail(value:any) {
    console.log(value)
    this.Images = last(value.target.value.split('\\'))
    this.file.uploadfile(value.target.value)
  }


}
