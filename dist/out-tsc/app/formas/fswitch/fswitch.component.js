import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
export let FswitchComponent = class FswitchComponent {
    constructor(_mngWidget) {
        this._mngWidget = _mngWidget;
        this.config = new EventEmitter();
        this.classes = ['success', 'primary', 'warning', 'danger'];
        this.columnsWidth = ['col-3', 'col-4', 'col-5', 'col-6', 'col-7', 'col-8', 'col-9',
            'col-10', 'col-11', 'col-12'];
        this.iotConfig = {
            userId: '',
            selectedDevice: {
                name: "",
                dId: "",
                //template:"",
                templateId: "",
                saverRule: false
            },
            variableFullName: "",
            variable: "",
            variableType: "output",
            //variableSendFreq:0,
            unit: "",
            decimalPlaces: 0,
            chartTimeAgo: 0,
            icon: "fa-sun",
            columnWidth: "col-6",
            widget: "",
            class: "",
            message: "{'status':'stop'}",
        };
        this.iotConfig.widget = this._mngWidget.readTypeWidgets(3);
    }
    sendConfig() {
        this.config.emit(this.iotConfig);
    }
};
__decorate([
    Output()
], FswitchComponent.prototype, "config", void 0);
FswitchComponent = __decorate([
    Component({
        selector: 'app-fswitch',
        templateUrl: './fswitch.component.html',
        styles: []
    })
], FswitchComponent);
//# sourceMappingURL=fswitch.component.js.map