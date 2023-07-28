import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let DevicesComponent = class DevicesComponent {
    constructor(_peticionesHttp) {
        this._peticionesHttp = _peticionesHttp;
        this.devices = [
            {
                name: "Hogar",
                dId: "8881",
                // template/:"Sensor Potencia",
                templateId: "sjkhlskahfladshflf",
                saverRule: false
            },
            {
                name: "Empresa",
                dId: "8882",
                //template/:"Sensor Temperatura",
                templateId: "ssjkhlskahfladshfl",
                saverRule: true
            },
            {
                name: "Oficina",
                dId: "8883",
                //template//:"Sensor Iluminacion",
                templateId: "sjkhlskahfladshflf3",
                saverRule: false
            },
        ];
    }
    ngOnInit() {
        this._peticionesHttp.getDevices();
        console.log('devicesComponent->ngOnInit, despues de getDevices()');
    }
    deleteDevice(pos) {
        console.log('Se va a borrar el Dispositivo: ${this.devices[pos].name}');
    }
    updateSaverRule(id) {
        this.devices[id].saverRule = !this.devices[id].saverRule;
    }
};
DevicesComponent = __decorate([
    Component({
        selector: 'app-devices',
        templateUrl: './devices.component.html',
        styleUrls: ['./devices.component.html']
    })
], DevicesComponent);
//# sourceMappingURL=devices.component.js.map