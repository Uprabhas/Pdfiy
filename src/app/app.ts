import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared-components/header/header';
import { Footer } from './shared-components/footer/footer';
import { AppMaterialModule } from './helper/app-material/app-material-module';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, AppMaterialModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'pdf_workspace';
}
