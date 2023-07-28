import { Component } from '@angular/core';
import { IDevice } from 'src/app/services/mng-widgets.service';
import { PeticioneshttpService } from 'src/app/services/peticioneshttp.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: [
  ]
})

export class DevicesComponent {
  devices:IDevice[]=[
    {
    name:"Hogar",
    dId:"8881",
    //template/:"ayuda",
    templateId:"sjkhlskahfladshflf",
    saverRule:false
  },

  {
    name:"Empresa",
    dId:"8882",
    templateId:"ssjkhlskahfladshfl",
    saverRule:true
  },

  {
    name:"Oficina",
    dId:"8883",
    templateId:"sjkhlskahfladshflf3",
    saverRule:false
  },
]

constructor(private _peticionesHttp:PeticioneshttpService){}

ngOnInit(){
  this._peticionesHttp.getDevices();
  console.log('devicesComponent->ngOnInit, despues de getDevices()');
}

deleteDevice(pos:number){
  console.log(`Se va a borrar el Dispositivo: ${this.devices[pos].name}`)
}

updateSaverRule(id:number){
  this.devices[id].saverRule=!this.devices[id].saverRule;
}
}
