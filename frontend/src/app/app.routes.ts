import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from './services/api';

export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login').then(m => m.LoginComponent) 
  },
  { 
    path: 'game', 
    loadComponent: () => import('./components/game/game').then(m => m.GameComponent),
    canActivate: [() => !!inject(ApiService).user()]
  },
  { 
    path: 'admin', 
    loadComponent: () => import('./components/admin/admin').then(m => m.AdminComponent),
    canActivate: [() => inject(ApiService).user()?.admin === true] 
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];