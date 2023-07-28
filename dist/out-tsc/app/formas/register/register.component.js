import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let RegisterComponent = class RegisterComponent {
    constructor(_peticionesHttp, router, _uiServices) {
        this._peticionesHttp = _peticionesHttp;
        this.router = router;
        this._uiServices = _uiServices;
        this.user = {
            nombre: "",
            email: "",
            password: ""
        };
    }
    register() {
        console.log('Register', this.user);
        this._peticionesHttp.register(this.user)
            .then(val => {
            console.log('En register:val:', val);
            if (val)
                this.router.navigateByUrl('/dashboard');
        })
            .catch(err => {
            if (err.error.err.errors.message)
                this._uiServices.alertaError('Error en registro:' + err.error.err.errors.message);
            else
                this._uiServices.alertaError('Error desconocido en registro');
        });
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styles: []
    })
], RegisterComponent);
//# sourceMappingURL=register.component.js.map