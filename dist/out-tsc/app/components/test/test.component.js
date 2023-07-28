import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let TestComponent = class TestComponent {
    constructor(_eventBus) {
        this._eventBus = _eventBus;
        this.value1 = false;
        this.value2 = false;
        this.value3 = false;
        this.value4 = false;
        this.topic1 = "userId/8881/var1/sdata";
        this.topic2 = "userId/8882/var2/sdata";
        this.topic3 = "userId/8883/var3/sdata";
        this.topic4 = "userId/8884/var4/sdata";
        this.configButton = {
            userId: 'userId',
            selectedDevice: {
                name: "hogar",
                dId: "8881",
                template: "Sensor Potencia",
                templateId: "asdfghjkl",
                saverRule: false
            },
            variableFullName: "Bomba",
            variable: "var1",
            icon: "fa-sun",
            column: "col-4",
            widget: "indicator",
            class: "success",
            message: "{'status':'stop'}",
            text: "switch",
            demo: true
        };
        this.config1 = {
            userId: 'userId',
            selectedDevice: {
                name: "hogar",
                dId: "8881",
                template: "Sensor Potencia",
                templateId: "asdfghjkl",
                saverRule: false
            },
            variableFullName: "Motor",
            variable: "var1",
            icon: "fa-sun",
            column: "col-4",
            widget: "indicator",
            class: "danger",
            message: "{'status':'stop'}",
            text: "s2-ok"
        };
        this.config2 = {
            userId: 'userId',
            selectedDevice: {
                name: "oficina",
                dId: "8882",
                template: "Sensor Potencia",
                templateId: "asdfghjkl",
                saverRule: false
            },
            variableFullName: "Bomba",
            variable: "var2",
            icon: "fa-sun",
            column: "col-6",
            widget: "indicator",
            class: "danger"
        };
        this.config3 = {
            userId: 'userId',
            selectedDevice: {
                name: "hogar",
                dId: "8883",
                template: "Sensor Potencia",
                templateId: "asdfghjkl",
                saverRule: false
            },
            variableFullName: "Bomba",
            variable: "var3",
            icon: "fa-sun",
            column: "col-6",
            widget: "indicator",
            class: "warning"
        };
        this.config4 = {
            userId: 'userId',
            selectedDevice: {
                name: "oficina2",
                dId: "8884",
                template: "Sensor Potencia",
                templateId: "asdfghjkl",
                saverRule: false
            },
            variableFullName: "Bomba",
            variable: "var4",
            icon: "fa-sun",
            column: "col-6",
            widget: "indicator",
            class: "dark"
        };
    }
    sendData1() {
        this.value1 = !this.value1;
        console.log('El valor en templates es: ', this.value1);
        this._eventBus.emit(this.topic1, { value: this.value1 });
    }
    sendData2() {
        this.value2 = !this.value2;
        console.log('El valor en templates es: ', this.value2);
        this._eventBus.emit(this.topic2, { value: this.value2 });
    }
    sendData3() {
        this.value3 = !this.value3;
        console.log('El valor en templates es: ', this.value3);
        this._eventBus.emit(this.topic3, { value: this.value3 });
    }
    sendData4() {
        this.value4 = !this.value4;
        console.log('El valor en templates es: ', this.value4);
        this._eventBus.emit(this.topic4, { value: this.value4 });
    }
};
TestComponent = __decorate([
    Component({
        selector: 'app-test',
        templateUrl: './test.component.html',
        styles: []
    })
], TestComponent);
//# sourceMappingURL=test.component.js.map