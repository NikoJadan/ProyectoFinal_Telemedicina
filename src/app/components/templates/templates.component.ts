

import { Component } from '@angular/core';
import { EventBusService } from 'src/app/services/event-bus.service';
import { IConfigW, ITemplate, MngWidgetsService } from 'src/app/services/mng-widgets.service';
import { PeticioneshttpService } from 'src/app/services/peticioneshttp.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { trigger } from '@angular/animations';


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styles: [
  ]
})
export class TemplatesComponent {
  opciones=[{id:'numberchart', msn:'Gráfica Numérica INPUT<-'},
            {id:'indicator', msn:'Indicador Booleano INPUT<-'},
            {id:'map', msn:'Mapa INPUT<-'},
            {id:'switch', msn:'Switch OUTPUT->'},
            {id:'button', msn:'Botón OUTPUT->'}];
  opcionSeleccionada="";
  widgets:IConfigW[]=[];
  habilitarAddWidget=false;
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
  configRef:IConfigW={
    userId:'',
    selectedDevice:{
      name:"",
      dId:"",
      //template:{},
      templateId:"",
      saverRule:false

    },
    variableFullName:"",
    variable:"",
    variableType:"",
    icon:"",
    columnWidth:"",
    widget:"",
    class:"",
    message:"",
    text:"",
    demo:true,
  }
  templates:ITemplate[]=[];
  template:ITemplate={
    userId:"aaa",
    name:"inicio",
  }
  constructor(private _mngWidget:MngWidgetsService,
              private _peticionesHttp:PeticioneshttpService,
              private _uiService:UiServiceService){
    this.widgets=[];
    this.widgets=this._mngWidget.readWidgets();
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._peticionesHttp.getTemplates().then(result=>{
      this.templates=result;
    }).catch(err=>{
      this.templates=[];
      console.log('Error en emplates.component ->ngOnInit ->getTemplates:',err);
    })
  }
  saveTemplate(){
    this.template.widgets=this.widgets;
    this._peticionesHttp.saveTemplate(this.template)
                 .then(resp=>{
                  if(resp){
                    this.templates.push(JSON.parse(JSON.stringify(this.template)));
                  }else{
                    this._uiService.alertaError('No se puede grabar el template');
                  }
                 }).catch(err=>{
                  console.log('Error en templatesComponent->saveTemplate:',err);
                  this._uiService.alertaError('Error Desconocido en templatesComponent->saveTemplate');
                 })
  }

  deleteTemplate(i:number){
    this._peticionesHttp.deleteTemplate(this.templates[i])
        .then(resp=>{
          if(resp){
            this.templates.splice(i,1);
          }else{
            this._uiService.alertaError('No se puede eliminar template')
          }
        }).catch(err=>{
          console.log('Error en templates.component->deleteTemplate, error:',err);
          this._uiService.alertaError('Error en templates.component->deleteTemplate');
        });
  }

  configIni=this.configRef;
  actualizarConfig(event:IConfigW){
    this.configRef=event;
    this.habilitarAddWidget=true;
  }
  addNewWidget(){
    this.configRef.widget=this.opcionSeleccionada;
    this.configRef.variable=this.makeId(10);
    this._mngWidget.addNewWidget(this.configRef);
  }

delWidget(pos:number){
  this._mngWidget.delNewWidget(pos);
}

  makeId(length:number){
    var result="";
    var caracteres="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxys0123456789";
    var caracteresLength=caracteres.length;
    for(var i=0;i<length;i++){
      result+=caracteres.charAt(Math.floor(Math.random()*caracteresLength));
    }
    return result;
  }
}
