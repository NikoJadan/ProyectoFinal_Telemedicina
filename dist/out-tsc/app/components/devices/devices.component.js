import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let DevicesComponent = class DevicesComponent {
    constructor(_peticionesHttp, _uiService) {
        this._peticionesHttp = _peticionesHttp;
        this._uiService = _uiService;
        this.devices = [
            {
                name: "Hogar",
                dId: "8881",
                //template/:"Sensor Potencia",
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
        this.templates = [];
        this.templateSelected = 1;
        this.device = {
            name: "",
            dId: ""
        };
    }
    ngOnInit() {
        this.devices = [];
        this._peticionesHttp.getDevices().then(devs => {
            this.devices = devs;
        });
        //console.log('devicesComponent->ngOnInit, despues de getDevices()');
        this._peticionesHttp.readTemplates().then(templates => {
            this.templates = templates;
        });
    }
    limpiarDatos() {
        this.device.name = '';
        this.device.dId = '';
        this.templateSelected = -1;
    }
    addDevice() {
        if ((this.device.name.length > 0) && (this.templateSelected >= 0) && (this.device.dId.length)) {
            console.log('addDevices->templateSelected:', this.templateSelected);
            console.log('addDevices->deviceNew:', this.device);
            this.device.templateId = JSON.parse(JSON.stringify(this.templates[this.templateSelected]._id));
            this.device.templateName = JSON.parse(JSON.stringify(this.templates[this.templateSelected].name));
            this._peticionesHttp.addDevice(this.device)
                .then(resp => {
                if (resp) {
                    //this.devices.push(JSON.parse(JSON.stringify(this.device)));
                    this.limpiarDatos();
                }
                else {
                    console.log('error en deviceComponent->addDevice');
                }
            });
        }
        else {
            console.log('Error: Valores no válidos para el device');
        }
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