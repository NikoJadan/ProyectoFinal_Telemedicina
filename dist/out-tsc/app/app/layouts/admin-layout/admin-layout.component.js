import { __decorate } from "tslib";
import { filter } from 'rxjs/operators';
import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import PerfectScrollbar from 'perfect-scrollbar';
export let AdminLayoutComponent = class AdminLayoutComponent {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this._router = new Subscription();
        this.yScrollStack = [];
    }
    ngOnInit() {
        const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        const elemMainPanel = document.querySelector('.main-panel');
        const elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe((ev) => {
            this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof NavigationEnd) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            let ps = new PerfectScrollbar(elemMainPanel);
            ps = new PerfectScrollbar(elemSidebar);
        }
    }
    ngAfterViewInit() {
        this.runOnRouteChange();
    }
    isMaps(path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    }
    runOnRouteChange() {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemMainPanel = document.querySelector('.main-panel');
            const ps = new PerfectScrollbar(elemMainPanel);
            ps.update();
        }
    }
    isMac() {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
};
AdminLayoutComponent = __decorate([
    Component({
        selector: 'app-admin-layout',
        templateUrl: './admin-layout.component.html',
        styleUrls: ['./admin-layout.component.scss']
    })
], AdminLayoutComponent);
//# sourceMappingURL=admin-layout.component.js.map