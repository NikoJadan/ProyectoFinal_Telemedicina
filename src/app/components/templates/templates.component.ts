import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { EventBusService } from 'src/app/services/event-bus.service';
import { IConfigW, MngWidgetsService } from 'src/app/services/mng-widgets.service';

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
      template:"",
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

  configIni=this.configRef;

  constructor(private _mngWidget:MngWidgetsService){
    this.widgets=[];
    this.widgets=this._mngWidget.readWidgets();
  }

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
