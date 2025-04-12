import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  

  { 
    path: 'admin', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/admin/admin.routes').then(m => m.ADMIN_ROUTES) 
  },
  { 
    path: 'enseignant', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/enseignant/enseignant.routes').then(m => m.ENSEIGNANT_ROUTES) 
  },
  { 
    path: 'etudiant', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/etudiant/etudiant.routes').then(m => m.ETUDIANT_ROUTES) 
  },
  { 
    path: 'appui-insertion', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/appui-insertion/appui-insertion.routes').then(m => m.APPUI_INSERTION_ROUTES) 
  },
  { 
    path: 'administratif', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/administratif/administratif.routes').then(m => m.ADMINISTRATIF_ROUTES) 
  },
];
