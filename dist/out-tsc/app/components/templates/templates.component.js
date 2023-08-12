import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let TemplatesComponent = class TemplatesComponent {
    constructor(_mngWidget, _peticionesHttp, _uiService) {
        this._mngWidget = _mngWidget;
        this._peticionesHttp = _peticionesHttp;
        this._uiService = _uiService;
        this.opciones = [{ id: 'numberchart', msn: 'Gráfica Numérica INPUT<-' },
            { id: 'indicator', msn: 'Indicador Booleano INPUT<-' },
            { id: 'map', msn: 'Mapa INPUT<-' },
            { id: 'switch', msn: 'Switch OUTPUT->' },
            { id: 'button', msn: 'Botón OUTPUT->' }];
        this.opcionSeleccionada = "";
        this.widgets = [];
        this.habilitarAddWidget = false;
        /*configButton={
          userId:'userId',
          selectedDevice:{
            name:"hogar",
            dId:"8881",
            template:"Sensor Potencia",
            templateId:"asdfghjkl",
            saverRule:false
      
          },
          variableFullName:"Bomba",
          variable:"var1",
          icon:"fa-sun",
          column:"col-4",
          widget:"indicator",
          class:"success",
          message:"{'status':'stop'}",
          text:"switch",
          demo:true
        }*/
        this.configRef = {
            userId: '',
            selectedDevice: {
                name: "",
                dId: "",
                //template:{},
                templateId: "",
                saverRule: false
            },
            variableFullName: "",
            variable: "",
            variableType: "",
            icon: "",
            columnWidth: "",
            widget: "",
            class: "",
            message: "",
            text: "",
            demo: true,
        };
        this.templates = [];
        this.template = {
            userId: "aaa",
            name: "inicio",
        };
        this.configIni = this.configRef;
        this.widgets = [];
        this.widgets = this._mngWidget.readWidgets();
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._peticionesHttp.getTemplates().then(result => {
            this.templates = result;
        }).catch(err => {
            this.templates = [];
            console.log('Error en emplates.component ->ngOnInit ->getTemplates:', err);
        });
    }
    saveTemplate() {
        this.template.widgets = this.widgets;
        this._peticionesHttp.saveTemplate(this.template)
            .then(resp => {
            if (resp) {
                this.templates.push(JSON.parse(JSON.stringify(this.template)));
            }
            else {
                this._uiService.alertaError('No se puede grabar el template');
            }
        }).catch(err => {
            console.log('Error en templatesComponent->saveTemplate:', err);
            this._uiService.alertaError('Error Desconocido en templatesComponent->saveTemplate');
        });
    }
    deleteTemplate(i) {
        this._peticionesHttp.deleteTemplate(this.templates[i])
            .then(resp => {
            if (resp) {
                this.templates.splice(i, 1);
            }
            else {
                this._uiService.alertaError('No se puede eliminar template');
            }
        }).catch(err => {
            console.log('Error en templates.component->deleteTemplate, error:', err);
            this._uiService.alertaError('Error en templates.component->deleteTemplate');
        });
    }
    actualizarConfig(event) {
        this.configRef = event;
        this.habilitarAddWidget = true;
    }
    addNewWidget() {
        this.configRef.widget = this.opcionSeleccionada;
        this.configRef.variable = this.makeId(10);
        this._mngWidget.addNewWidget(this.configRef);
    }
    delWidget(pos) {
        this._mngWidget.delNewWidget(pos);
    }
    makeId(length) {
        var result = "";
        var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxys0123456789";
        var caracteresLength = caracteres.length;
        for (var i = 0; i < length; i++) {
            result += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
        }
        return result;
    }
};
TemplatesComponent = __decorate([
    Component({
        selector: 'app-templates',
        templateUrl: './templates.component.html',
        styles: []
    })
], TemplatesComponent);
//# sourceMappingURL=templates.component.js.map