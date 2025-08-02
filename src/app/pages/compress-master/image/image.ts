import { Component, ViewChild } from '@angular/core';
import { AppMaterialModule } from '../../../helper/app-material/app-material-module';
import jsPDF from 'jspdf';
import {last} from 'lodash'
import { FileUpload } from '../../../shared-components/file-upload/file-upload';


@Component({
  selector: 'app-image',
  imports: [AppMaterialModule],
  templateUrl: './image.html',
  styleUrl: './image.scss'
})
export class Image {

  
}


