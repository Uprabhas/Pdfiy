import { Routes } from '@angular/router';
import { Notfound } from './shared-components/notfound/notfound';
import { Home } from './pages/home/home';
import { Tools } from './pages/tools/tools';
import { JpgToPdf } from './pages/jpg-to-pdf/jpg-to-pdf';
import { FileUpload } from './shared-components/file-upload/file-upload';


export const routes: Routes = [
  //component routing 
  // pathMatch: 'full' as PathMatch,
     {
    path: '',
    component:Home
  },
  {
    path: 'tools',
    title:'All tools',
    component:Tools
    // pathMatch: 'full' as PathMatch,
  },
  {
    path: 'jpgtopdf',
    title:'Convert ipg to pdf format',
    component:JpgToPdf
  },

  //module routing
  {
    path:'user',
    loadChildren:()=>
      import('./pages/user/user-module').then((m)=>m.UserModule)
  },
  { path: '**', component: Notfound},
];
