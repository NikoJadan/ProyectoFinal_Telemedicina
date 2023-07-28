import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
export let FnumberchartComponent = class FnumberchartComponent {
    constructor(_mngWidget) {
        this._mngWidget = _mngWidget;
        this.config = new EventEmitter();
        this.classes = ['success', 'primary', 'warning', 'danger'];
        this.columnsWidth = ['col-3', 'col-4', 'col-5', 'col-6', 'col-7', 'col-8', 'col-9',
            'col-10', 'col-11', 'col-12'];
        this.ncConfig = {
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
            variableType: "input",
            variableSendFreq: 0,
            unit: "",
            decimalPlaces: 0,
            chartTimeAgo: 0,
            icon: "fa-sun",
            columnWidth: "col-6",
            widget: "",
            class: "",
            message: "{'status':'stop'}",
            demo: true
        };
        this.ncConfig.widget = this._mngWidget.readTypeWidgets(0);
    }
    sendConfig() {
        this.config.emit(this.ncConfig);
    }
};
__decorate([
    Output()
], FnumberchartComponent.prototype, "config", void 0);
FnumberchartComponent = __decorate([
    Component({
        selector: 'app-fnumberchart',
        templateUrl: './fnumberchart.component.html',
        styles: []
    })
], FnumberchartComponent);
//# sourceMappingURL=fnumberchart.component.js.map