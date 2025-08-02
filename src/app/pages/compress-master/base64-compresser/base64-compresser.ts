import { Component } from '@angular/core';
import { AppMaterialModule } from '../../../helper/app-material/app-material-module';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-base64-compresser',
  imports: [AppMaterialModule],
  templateUrl: './base64-compresser.html',
  styleUrl: './base64-compresser.scss'
})
export class Base64Compresser {
  Newbase64 = new FormControl('')
  compressbase64 = new FormControl('')
  SizeofQuality = new FormControl('')
  type = new FormControl('png')

  data: any;


  resizeBase64Image(base64Image: any,size:any,type:any) {
    return new Promise((resolve, reject) => {
      const maxSizeInMB = size;
      const maxSizeInBytes = maxSizeInMB * 400 * 400;
      const img = new Image();
      img.src = base64Image;
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const width = img.width;
        const height = img.height;
        const aspectRatio = width / height;
        const newWidth = Math.sqrt(maxSizeInBytes * aspectRatio);
        const newHeight = Math.sqrt(maxSizeInBytes / aspectRatio);
        canvas.width = newWidth;
        canvas.height = newHeight;
        ctx?.drawImage(img, 0, 0, newWidth, newHeight);
        let quality = 1;
        let dataURL = canvas.toDataURL(`image/${type}`, quality);
        resolve(dataURL);
        reject("error");
      };
    });
  }

  getbase64() {
    console.log("size",this.SizeofQuality.value);
    console.log("type",this.type);

    this.resizeBase64Image(this.Newbase64.value,this.SizeofQuality.value,this.type).then((v: any) => (console.log(v), this.data = v));
    setTimeout(() => {
      console.log(this.Newbase64.value)
      console.log(this.data);
      this.compressbase64.patchValue(this.data);
    }, 2000)
  }
}
