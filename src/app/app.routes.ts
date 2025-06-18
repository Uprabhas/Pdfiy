import { Routes } from '@angular/router';
import { Notfound } from './shared-components/notfound/notfound';
import { Home } from './pages/home/home';
import { Tools } from './pages/tools/tools';


export const routes: Routes = [
     {
    path: '',
    component:Home
    // pathMatch: 'full' as PathMatch,
  },
  {
    path: 'tools',
    title:'All tools',
    component:Tools
    // pathMatch: 'full' as PathMatch,
  },
  {
    path:'user',
    loadChildren:()=>
      import('./pages/user/user-module').then((m)=>m.UserModule)
  },
  { path: '**', component: Notfound},
];
