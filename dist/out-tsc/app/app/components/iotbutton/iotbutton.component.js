import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export let IotbuttonComponent = class IotbuttonComponent {
    sendValue() {
        this.sending = true;
        setTimeout(() => { this.sending = false; }, 2000);
        const topic = 'mqtt-sender';
        const toSend = {
            topic: this.config.userId + "/" + this.config.selectedDevice.dId + "/" + this.config.variable + "/acdata",
            msg: {
                value: this.config.message
            }
        };
        this._eventBus.emit(topic, toSend);
    }
    constructor(_eventBus) {
        this._eventBus = _eventBus;
        this.sending = false;
        this.value = true;
    }
    getIconColorClass() {
        return this._eventBus.getIconColorClass(this.sending || !this.value, this.config);
    }
};
__decorate([
    Input()
], IotbuttonComponent.prototype, "config", void 0);
IotbuttonComponent = __decorate([
    Component({
        selector: 'app-iotbutton',
        templateUrl: './iotbutton.component.html',
        styles: []
    })
], IotbuttonComponent);
//# sourceMappingURL=iotbutton.component.js.map