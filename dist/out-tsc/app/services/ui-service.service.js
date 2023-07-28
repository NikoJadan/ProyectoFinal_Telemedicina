import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
export let UiServiceService = class UiServiceService {
    constructor() { }
    async alertaInformativa(msn) {
        await Swal.fire({
            icon: 'info',
            text: msn
        });
    }
    async alertaError(msn) {
        await Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: msn
        });
    }
};
UiServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UiServiceService);
//# sourceMappingURL=ui-service.service.js.map