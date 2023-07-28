import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
export let MngWidgetsService = class MngWidgetsService {
    readTypeWidgets(type) {
        if (type < this.widgetType.length) {
            return this.widgetType[type];
        }
        return "";
    }
    readWidgets() {
        return this.widgets;
    }
    addNewWidget(newWidget) {
        this.widgets.push(JSON.parse(JSON.stringify(newWidget)));
    }
    delNewWidget(pos) {
        if (pos < this.widgets.length) {
            this.widgets.splice(pos, 1);
        }
    }
    constructor() {
        this.templates = [];
        this.widgets = [];
        this.widgetType = ['numerChart', 'indicator', 'map', 'switch', 'button'];
    }
};
MngWidgetsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MngWidgetsService);
//# sourceMappingURL=mng-widgets.service.js.map