import { Component } from '@angular/core';
import { IDevice, ITemplate } from 'src/app/services/mng-widgets.service';
import { PeticioneshttpService } from 'src/app/services/peticioneshttp.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.html']
})
export class DevicesComponent {
  devices:IDevice[]=[
    {
    name:"Hogar",
    dId:"8881",
    //template/:"Sensor Potencia",
    templateId:"sjkhlskahfladshflf",
    saverRule:false
  },

  {
    name:"Empresa",
    dId:"8882",
    //template/:"Sensor Temperatura",
    templateId:"ssjkhlskahfladshfl",
    saverRule:true
  },

  {
    name:"Oficina",
    dId:"8883",
    //template//:"Sensor Iluminacion",
    templateId:"sjkhlskahfladshflf3",
    saverRule:false
  },
]
  templates:ITemplate[]=[];
  templateSelected=1;
  device:IDevice={
    name:"",
    dId:""
  };
constructor(private _peticionesHttp:PeticioneshttpService,
            private _uiService:UiServiceService){}

ngOnInit(){
  this.devices=[];
  this._peticionesHttp.getDevices().then(devs=>{
    this.devices=devs;
  });
  //console.log('devicesComponent->ngOnInit, despues de getDevices()');
  this._peticionesHttp.readTemplates().then(templates=>{
    this.templates=templates;
  })
}
limpiarDatos(){
  this.device.name='';
  this.device.dId='';
  this.templateSelected=-1;
}
addDevice(){
  if((this.device.name.length>0)&&(this.templateSelected>=0)&&(this.device.dId.length)){
    console.log('addDevices->templateSelected:',this.templateSelected);
    console.log('addDevices->deviceNew:',this.device);
    this.device.templateId=JSON.parse(JSON.stringify(this.templates[this.templateSelected]._id));
    this.device.templateName=JSON.parse(JSON.stringify(this.templates[this.templateSelected].name));
    this._peticionesHttp.addDevice(this.device)
          .then(resp=>{
            if(resp){
              //this.devices.push(JSON.parse(JSON.stringify(this.device)));
              this.limpiarDatos();
            }else{
              console.log('error en deviceComponent->addDevice');

            }
          })
  }else{
    console.log('Error: Valores no válidos para el device');
  }
}

deleteDevice(pos:number){
  console.log('Se va a borrar el Dispositivo: ${this.devices[pos].name}')
}

updateSaverRule(id:number){
  this.devices[id].saverRule=!this.devices[id].saverRule;
}
}

