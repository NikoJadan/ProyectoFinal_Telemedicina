import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './formas/login/login.component';
import { RegisterComponent } from './formas/register/register.component';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes =[
  {
    path: '',
    redirectTo:'login', //'dashboard',
    pathMatch: 'full',
    //canActivate:[UsuarioGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
   {
    path: '',
    canActivate:[UsuarioGuard],
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x=>x.AdminLayoutModule)
  }]},
  {
    path: '**',
    //redirectTo: 'dashboard'
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
