import { __decorate } from "tslib";
import { Component } from '@angular/core';
export const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: '' },
    { path: '/devices', title: 'Dispositivos', icon: 'design_bullet-list-67', class: '' },
    { path: '/alarmas', title: 'Alarmas', icon: 'ui-1_bell-53', class: '' },
    { path: '/templates', title: 'Templates', icon: 'location_map-big', class: '' },
    { path: '/test', title: 'Prueba', icon: 'education_atom', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO', icon: 'objects_spaceship', class: 'active active-pro' }
];
export let SidebarComponent = class SidebarComponent {
    constructor() {
        this.menuItems = [];
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    }
    ;
};
SidebarComponent = __decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.css']
    })
], SidebarComponent);
//# sourceMappingURL=sidebar.component.js.map