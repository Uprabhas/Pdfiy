import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Base64Compresser } from './base64-compresser/base64-compresser';
import { Pdf } from './pdf/pdf';
import { Image } from './image/image';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'Base64compresser', title:'Base64-compresser', component:Base64Compresser
      },
      {
        path:'pdfcompresser', title:'PDF file compress', component:Pdf
      },
      {
        path:'imagecompresser', title:'image file compress', component:Image
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompressMasterRoutingModule { }
