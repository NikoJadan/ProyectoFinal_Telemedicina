import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export let IotswitchComponent = class IotswitchComponent {
    constructor(_eventBus) {
        this._eventBus = _eventBus;
        this.value = false;
        this.sending = false;
    }
    getIconColorClass() {
        return this._eventBus.getIconColorClass(this.sending || !this.value, this.config);
    }
    sendValue() {
        this.sending = true;
        const toSend = {
            topic: this.config.userId + "/" + this.config.selectedDevice.dId + "/" + this.config.variable + "/acdata",
            msg: {
                value: this.config.message
            }
        };
        this._eventBus.emit('mqqt-sender', toSend);
        this.sending = false;
    }
};
__decorate([
    Input()
], IotswitchComponent.prototype, "config", void 0);
IotswitchComponent = __decorate([
    Component({
        selector: 'app-iotswitch',
        templateUrl: './iotswitch.component.html',
        styles: []
    })
], IotswitchComponent);
//# sourceMappingURL=iotswitch.component.js.map