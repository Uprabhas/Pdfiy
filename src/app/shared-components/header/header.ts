import { Component, NgModule } from '@angular/core';
import { AppMaterialModule } from '../../helper/app-material/app-material-module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [AppMaterialModule,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
