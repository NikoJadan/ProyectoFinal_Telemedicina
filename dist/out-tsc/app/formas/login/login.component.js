import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let LoginComponent = class LoginComponent {
    constructor(_peticionesHttp, router, _uiServices) {
        this._peticionesHttp = _peticionesHttp;
        this.router = router;
        this._uiServices = _uiServices;
        this.user = {
            email: "",
            password: ""
        };
    }
    login() {
        console.log("Usuario", this.user);
        this._peticionesHttp.login(this.user.email, this.user.password)
            .then(val => {
            console.log('login ok', val);
            if (val)
                this.router.navigateByUrl('/dashboard');
        })
            .catch(err => {
            console.log("ERROR en Login: ", err);
            this._uiServices.alertaError('Error no definido en Login');
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styles: []
    })
], LoginComponent);
//# sourceMappingURL=login.component.js.map