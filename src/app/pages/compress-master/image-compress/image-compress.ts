import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUpload } from '../../../shared-components/file-upload/file-upload';
import { AppMaterialModule } from '../../../helper/app-material/app-material-module';

@Component({
  selector: 'app-image-compress',
  standalone: true,
  imports: [FileUpload, AppMaterialModule],
  templateUrl: './image-compress.html',
  styleUrls: ['./image-compress.scss']
})
export class ImageCompress {
  Filetype: string | undefined;
  Imgdata: File | undefined;
  imageDataUrl!: string;

  @ViewChild('jpgtopdffile', { static: false }) jpgtopdffile!: FileUpload;

  compressedImageFile!: File;
  maxFileSize = 10 * 1024 * 1024; // 10 MB
  maxDimension = 1024;
  defaultQuality = 1;

  onFileSelected(event: any): void {
    const file: File = event.files?.[0];
    if (!file || !file.type.startsWith("image")) {
      console.error('Please upload a valid image file.');
      return;
    }

    this.compressImage(file).subscribe({
      next: (compressed) => {
        console.log('Compressed image file:', compressed);
        this.compressedImageFile = compressed;
      },
      error: (err) => console.error('Compression error:', err)
    });
  }

  compressImage(file: File): Observable<File> {
    return new Observable<File>((observer) => {
      const reader = new FileReader();
      const img = new Image();

      reader.onload = () => {
        img.src = reader.result as string;
      };

      reader.onerror = (err) => {
        observer.error(err);
      };

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDim = Math.max(img.width, img.height);
        const scale = maxDim > this.maxDimension ? this.maxDimension / maxDim : 1;

        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          observer.error('Failed to get canvas context');
          return;
        }

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const quality = file.size > this.maxFileSize ? this.maxFileSize / file.size : this.defaultQuality;

        canvas.toBlob((blob) => {
          if (blob) {
            const compressedFile = new File([blob], 'compressed-' + file.name, {
              type: file.type,
              lastModified: Date.now(),
            });
            observer.next(compressedFile);
            observer.complete();
          } else {
            observer.error('Compression failed. Blob is null.');
          }
        }, file.type, quality);
      };

      img.onerror = () => {
        observer.error('Image load failed.');
      };

      reader.readAsDataURL(file);
    });
  }

  downloadCompressedImage(): void {
    if (!this.compressedImageFile) return;
    const url = URL.createObjectURL(this.compressedImageFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = this.compressedImageFile.name;
    a.click();
    URL.revokeObjectURL(url);
  }
}
