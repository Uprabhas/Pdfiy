import { Component } from '@angular/core';
import { AppMaterialModule } from '../../helper/app-material/app-material-module';

@Component({
  selector: 'app-tools',
  imports: [AppMaterialModule,],
  templateUrl: './tools.html',
  styleUrl: './tools.scss'
})
export class Tools {
  centered = false;
  disabled = false;
  unbounded = false;

  radius!: number;
  color!: string ;

  convert_tools=[
    {
      'name':'Pdf to Jpg Image',
      'desc':'Convert a Pdf to Jpg image format',
      'path':'',
    },
    {
      'name':'Pdf to PPT',
      'desc':'Convert a Pdf to Jpg image format',
      'path':'',
    },{
      'name':'Pdf to Excel',
      'desc':'Convert a Pdf to Jpg image format',
      'path':'',
    },{
      'name':'Pdf to Word',
      'desc':'Convert a Pdf to Jpg image format',
      'path':'',
    },{
      'name':'Png to PDF',
      'desc':'Convert a Pdf to Jpg image format',
      'path':'',
    },{
      'name':'JPG to PDF',
      'desc':'Convert a Pdf to Jpg image format',
      'path':'',
    },{
      'name':'PPT to PDF',
      'desc':'Convert a Pdf to Jpg image format',
      'path':'',
    },{
      'name':'Excel to PDF',
      'desc':'Convert a Pdf to Jpg image format',
      'path':'',
    },{
      'name':'Word to PDF',
      'desc':'Convert a Pdf to Jpg image format',
      'path':'',
    }
  ]

}
