import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageToPdf } from './image-to-pdf/image-to-pdf';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'imgtopdf',title:"Image to Pdf",component:ImageToPdf
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvertMasterRoutingModule { }
