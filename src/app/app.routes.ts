import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [MsalGuard],
  },
  {
    path: 'sign-off',
    loadComponent: () => import('./sign-off.component').then(m => m.SignOffComponent),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];
