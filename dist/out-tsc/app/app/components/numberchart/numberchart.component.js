import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export let NumberchartComponent = class NumberchartComponent {
    constructor(_eventBus, http) {
        this._eventBus = _eventBus;
        this.http = http;
        this.nowTime = Date.now();
        this.value = 0.0;
        this.isMounted = false;
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.isMounted = false;
        this.time = Date.now();
        //this.nowTime=Date.now();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.inicializarValores();
    }
    inicializarValores() {
        this.lineChartData = [
            {
                label: "Active Users",
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 2,
                data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630],
                backgroundColor: this.gradientFill,
                borderColor: "#f96332",
                pointBorderColor: "#FFF",
                pointBackgroundColor: "#f96332",
            }
        ];
        this.lineChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.lineChartOptions = {
            responsive: true,
            elements: {
                line: {
                    tension: 0.4
                }
            },
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            scales: {
                yAxes: {
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawBorder: false
                    },
                    ticks: {
                        stepSize: 500
                    }
                },
                xAxes: {
                    display: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };
        this.lineChartType = 'line';
        ////////////////////////////////////////
        this.isMounted = true;
        this.chartColor = "#FFFFFF";
        this.canvas = document.getElementById("lineChartV1");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");
    }
    chartClicked(e) {
        //console.log(e);
    }
    chartHovered(e) {
        console.log(e);
    }
    fechaActual() {
        this.nowTime = Date.now();
    }
    getTimeAgo(seconds) {
        if (seconds < 0) {
            seconds = 0;
        }
        if (seconds <= 59) {
            return seconds.toFixed() + " secs.";
        }
        if (seconds > 59 && seconds <= 3600) {
            seconds = seconds / 60;
            return seconds.toFixed() + " min.";
        }
        if (seconds > 3600 && seconds <= 86400) {
            seconds = seconds / 3600;
            return seconds.toFixed() + " horas.";
        }
        if (seconds > 86400) {
            seconds = seconds / 86400;
            return seconds.toFixed() + " dias.";
        }
        return "x seg.";
    }
    getIconColorClass() {
        return this._eventBus.getIconColorClass(!this.value, this.config);
    }
};
__decorate([
    Input()
], NumberchartComponent.prototype, "config", void 0);
NumberchartComponent = __decorate([
    Component({
        selector: 'app-numberchart',
        templateUrl: './numberchart.component.html',
        styles: []
    })
], NumberchartComponent);
//# sourceMappingURL=numberchart.component.js.map