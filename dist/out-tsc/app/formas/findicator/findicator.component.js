import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
export let FindicatorComponent = class FindicatorComponent {
    constructor(_mngWidget) {
        this._mngWidget = _mngWidget;
        this.config = new EventEmitter();
        this.classes = ['success', 'primary', 'warning', 'danger'];
        this.columnsWidth = ['col-3', 'col-4', 'col-5', 'col-6', 'col-7', 'col-8', 'col-9',
            'col-10', 'col-11', 'col-12'];
        this.iotIndicatorConfig = {
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
            message: "",
            text: "",
        };
        this.iotIndicatorConfig.widget = this._mngWidget.readTypeWidgets(4);
    }
    sendConfig() {
        this.config.emit(this.iotIndicatorConfig);
    }
};
__decorate([
    Output()
], FindicatorComponent.prototype, "config", void 0);
FindicatorComponent = __decorate([
    Component({
        selector: 'app-findicator',
        templateUrl: './findicator.component.html',
        styles: []
    })
], FindicatorComponent);
//# sourceMappingURL=findicator.component.js.map