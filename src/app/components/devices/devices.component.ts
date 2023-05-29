import { Component } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.html']
})
export class DevicesComponent {
  devices:any=[
    {
    name:"Hogar",
    dId:"8881",
    template:"Sensor Potencia",
    templateId:"sjkhlskahfladshflf",
    saverRule:false
  },

  {
    name:"Empresa",
    dId:"8882",
    template:"Sensor Temperatura",
    templateId:"ssjkhlskahfladshfl",
    saverRule:true
  },

  {
    name:"Oficina",
    dId:"8883",
    template:"Sensor Iluminacion",
    templateId:"sjkhlskahfladshflf3",
    saverRule:false
  },
]

deleteDevice(pos:number){
  console.log('Se va a borrar el Dispositivo: ${this.devices[pos].name}')
}

updateSaverRule(id:number){
  this.devices[id].saverRule=!this.devices[id].saverRule;
}
}
