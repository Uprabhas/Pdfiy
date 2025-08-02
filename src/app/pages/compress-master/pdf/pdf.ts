import { Component, ViewChild } from '@angular/core';
import { FileUpload } from '../../../shared-components/file-upload/file-upload';
import { AppMaterialModule } from '../../../helper/app-material/app-material-module';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf',
  imports: [AppMaterialModule,FileUpload],
  templateUrl: './pdf.html',
  styleUrl: './pdf.scss'
})
export class Pdf {

  Filetype:any;
  Imgdata:any
  @ViewChild('jpgtopdffile', { static: false })
  jpgtopdffile!: FileUpload;
  imageDataUrl!: string;

  constructor(private file: FileUpload) {

  }

  ngOnInit() {

  }

  onFileChange(event: any) {
    const file: File = event.files?.[0];
    this.file.uploadfile(event.files?.[0])
    this.Filetype = event.files?.[0].type;
    if (file.type === this.Filetype) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageDataUrl = reader.result as string; // base64 string
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid PNG image.');
    }
  }

  onPdfConvert() {
    if (!this.imageDataUrl) {
      alert('No image selected.');
      return;
    }

    const img = new Image();
    img.src = this.imageDataUrl;
    img.onload = () => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm

      // Calculate image size maintaining aspect ratio
      const ratio = img.width / img.height;
      let imgWidth = pageWidth;
      let imgHeight = pageWidth / ratio;

      if (imgHeight > pageHeight) {
        imgHeight = pageHeight;
        imgWidth = pageHeight * ratio;
      }

      const x = (pageWidth - imgWidth) / 2;
      const y = (pageHeight - imgHeight) / 2;

      if(this.Filetype ==="image/png"){
        pdf.addImage(this.imageDataUrl, 'PNG', x, y, imgWidth, imgHeight);
      }
      pdf.save('Pdfly.pdf');
    };

    img.onerror = () => {
      console.error('Image load failed');
    };
  }
}