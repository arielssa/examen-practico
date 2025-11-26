import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcercaComponent } from './acerca/acerca.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'acerca', component: AcercaComponent },
    ]
  }
];
