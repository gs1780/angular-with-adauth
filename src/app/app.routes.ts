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
    loadChildren: () => import('./sign-off.module').then(m => m.SignOffModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];
