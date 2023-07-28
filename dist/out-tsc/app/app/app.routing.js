import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
export let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            BrowserModule,
            RouterModule.forRoot(routes)
        ],
        exports: [],
    })
], AppRoutingModule);
//# sourceMappingURL=app.routing.js.map