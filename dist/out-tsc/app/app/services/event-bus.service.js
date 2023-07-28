import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export let EventBusService = class EventBusService {
    constructor() {
        this.subjects = [];
    }
    on(event) {
        let subject = this.subjects[event];
        if (!subject) {
            subject = new Subject();
            this.subjects[event] = subject;
        }
        return subject.asObservable();
    }
    off(event) {
        let subject = this.subjects[event];
        if (subject) {
            subject.complete();
            delete this.subjects[event];
        }
    }
    emit(event, data) {
        let subject = this.subjects[event];
        if (subject) {
            subject.next(data);
        }
        //console.log('topic:'+event+" datos:"+data.topic+data.msg.value);
        console.log('topic:' + event + " datos:" + data);
    }
    getIconColorClass(dark, config) {
        if (dark) {
            return "text-dark";
        }
        if (config.class == "success") {
            return "text-success";
        }
        if (config.class == "primary") {
            return "text-primary";
        }
        if (config.class == "warning") {
            return "text-warning";
        }
        if (config.class == "danger") {
            return "text-danger";
        }
        else {
            return "text-dark";
        }
    }
};
EventBusService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], EventBusService);
//# sourceMappingURL=event-bus.service.js.map