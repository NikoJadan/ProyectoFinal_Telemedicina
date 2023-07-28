import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { catchError, throwError } from 'rxjs';
export let NumberchartComponent = class NumberchartComponent {
    constructor(_eventBus, http) {
        this._eventBus = _eventBus;
        this.http = http;
        this.nowTime = Date.now();
        this.value = 0.0;
        this.isMounted = false;
        this.chartColor = "#FFFFFF";
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.isMounted = false;
        this.time = Date.now();
        //this.nowTime=Date.now();
    }
    ngOnInit() {
        ////////////////////////////////////////
        this.canvas = document.getElementById("lineChartV1");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.9)");
        this.lineChartData = [
            {
                label: "Active Users",
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 2,
                //data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630],
                data: [
                    { x: 1686094716516, y: 20 },
                    { x: 1686094737516, y: 40 },
                    { x: 1686094738516, y: 30 },
                    { x: 1686094739516, y: 55 },
                ],
                tension: 0.4,
                backgroundColor: this.gradientFill,
                borderColor: "#f96332",
                pointBorderColor: "#FFF",
                pointBackgroundColor: "#f96332",
            }
        ];
        //this.lineChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.lineChartData[0].data.map(item => {
            const date = new Date(item.x);
            const month = date.toLocaleDateString('default', { month: 'short' });
            const day = date.getDate();
            const hh = date.getHours();
            const mm = date.getMinutes();
            const ss = date.getSeconds();
            this.lineChartLabels.push(`${day}-${month}-${hh}:${mm}:${ss}`);
        });
        this.lineChartOptions = {
            responsive: 1,
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
                //yPadding: 10,
                //caretPadding: 10
            },
            // scales: {
            //   yAxes: [{
            //     //display: true,
            //     //ticks: {
            //       //display: true,
            //       //maxTicksLimit: 5,
            //       //padding: 10
            //     //},
            //     // gridLines: {
            //     //   zeroLineColor: "transparent",
            //     //   drawTicks: false,
            //     //   display: false,
            //     //   drawBorder: false
            //     // }
            //   }],
            //   xAxes: {
            //     display: 0,
            //     ticks: {
            //       display: false
            //     },
            //     gridLines: {
            //       zeroLineColor: "transparent",
            //       drawTicks: false,
            //       display: false,
            //       drawBorder: false
            //     }
            //   }
            // },
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
    }
    getNow() {
        this.nowTime = Date.now();
        setTimeout(() => {
            this.getNow();
        }, 1000);
    }
    ngAfterViewInit() {
        const topic = this.config.userId + "/" + this.config.SelectedDevice.dId + "/" + this.config.variable + "/sdata";
        this._eventBus.on(topic).subscribe(data => {
            this.processReceivedData(data);
        });
        setTimeout(() => {
            this.lineChartData[0].name = `${this.config.variableFullName} ${this.config.unit}`;
            this.updateColorClass();
            window.dispatchEvent(new Event('resize'));
        }, 1000);
    }
    ngOnDestroy() {
        const topic = this.config.userId + "/" + this.config.SelectedDevice.dId + "/" + this.config.variable + "/sdata";
        this._eventBus.off(topic);
    }
    ngOnChanges(changes) {
        console.log('ngONCHANGES, changes:', changes["config"]);
        if (changes["config"]) {
            setTimeout(() => {
                this.lineChartData[0].name = `${this.config.variableFullName} ${this.config.unit}`;
                this.updateColorClass();
                this.getNow();
                window.dispatchEvent(new Event('resize'));
            }, 1000);
        }
    }
    //Funcion para recibir los datos del servidor
    processReceivedData(data) {
        console.log("en processReceivedData->data:", data);
        this.time = Date.now();
        this.value = data.value;
    }
    actualizarLabels() {
        this.lineChartLabels = [];
        this.lineChartData[0].data.map(item => {
            const date = new Date(item.x);
            const month = date.toLocaleDateString('default', { month: 'short' });
            const day = date.getDate();
            const hh = date.getHours();
            const mm = date.getMinutes();
            const ss = date.getSeconds();
            this.lineChartLabels.push(`${day}-${month}-${hh}:${mm}:${ss}`);
        });
    }
    getChartData() {
        this.config.demo = true;
        if (this.config.demo) {
            this.lineChartData[0].data.unshift({ x: 1686094716516, y: 20 }, { x: 1686094737516, y: 40 }, { x: 1686094738516, y: 30 }, { x: 1686094739516, y: 55 });
            this.actualizarLabels();
            this.isMounted = true;
            console.log('Estamos en button - Recibir datos:', this.lineChartData[0].data);
            this.value = 1;
            return;
        }
        const http_Headers = {
            headers: {
                "x-Token": "<<token de acceso>>"
            },
            params: {
                dId: this.config.selectedDevice.dId,
                variable: this.config.variable,
                chartTimeAgo: this.config.chartTimeAgo
            }
        };
        this._http.get("/get-small-chart-data", http_Headers).pipe(tap(res1 => {
            const data = res1["data"].data;
            console.log("data:", data);
            data.array.forEach(element => {
                var tiempo = element.time + (new Date().getTimezoneOffset() * 60 * 1000 * -1);
                var valor = element.value;
                var aux = [];
                aux.push({ x: tiempo, y: valor });
                this.lineChartData[0].data.push(aux);
            });
            this.actualizarLabels();
            this.isMounted = true;
            return;
        }), catchError(error => {
            console.log(error);
            return throwError(() => error);
        })).suscribe();
    }
    updateColorClass() {
        console.log("update:" + this.config.class);
        var c = this.config.class;
        if (c == "success") {
            this.lineChartData[0].color = "#00f2c3";
        }
        if (c == "primary") {
            this.lineChartData[0].color = "#ec14eca";
        }
        if (c == "warning") {
            this.lineChartData[0].color = "#ff8d72";
        }
        if (c == "danger") {
            this.lineChartData[0].color = "#fd5d93";
        }
        this.lineChartData[0].name = this.config.variableFullName + " " + this.config.unit;
    }
    chartClicked(e) {
        console.log(e);
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
function tap(arg0) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=numberchart.component.js.map