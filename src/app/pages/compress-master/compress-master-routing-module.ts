import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Base64Compresser } from './base64-compresser/base64-compresser';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'Base64compresser', title:'Base64-compresser', component:Base64Compresser
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompressMasterRoutingModule { }
