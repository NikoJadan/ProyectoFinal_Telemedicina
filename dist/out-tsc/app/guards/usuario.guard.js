import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
export let UsuarioGuard = class UsuarioGuard {
    constructor(_peticionesHttp, router) {
        this._peticionesHttp = _peticionesHttp;
        this.router = router;
        this.canActivate = (route, state) => {
            if (this._peticionesHttp.isAuthenticated())
                return true;
            else
                return this.router.parseUrl('/login');
        };
    }
};
UsuarioGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UsuarioGuard);
//# sourceMappingURL=usuario.guard.js.map