import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export let IotindicatorComponent = class IotindicatorComponent {
    constructor(eventBusService, _eventBus) {
        this.eventBusService = eventBusService;
        this._eventBus = _eventBus;
        this.value = false;
    }
    getIconColorClass() {
        return this._eventBus.getIconColorClass(!this.value, this.config);
    }
    processReceivedData(data) {
        console.log('Datos recibidos: ', data);
        //var dat=JSON.parse(data);
        this.value = data.value;
    }
    ngOnInit() {
        const topic = this.config.userId + "/" + this.config.selectedDevice.dId + "/" + this.config.variable + "/sdata";
        this.eventBusService.on(topic).subscribe(data => {
            this.processReceivedData(data);
        });
        console.log('Iotindicator->ngOnInit-topic: ' + topic);
    }
    ngOnDestroy() {
        const topic = this.config.userId + "/" + this.config.selectedDevice.dId + "/" + this.config.variable + "/sdata";
        this.eventBusService.off(topic);
    }
};
__decorate([
    Input()
], IotindicatorComponent.prototype, "config", void 0);
IotindicatorComponent = __decorate([
    Component({
        selector: 'app-iotindicator',
        templateUrl: './iotindicator.component.html',
        styles: []
    })
], IotindicatorComponent);
//# sourceMappingURL=iotindicator.component.js.map