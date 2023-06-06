import { Component, Input } from '@angular/core';
import { EventBusService } from 'src/app/services/event-bus.service';
@Component({
  selector: 'app-iotindicator',
  templateUrl: './iotindicator.component.html',
  styles: [
  ]
})
export class IotindicatorComponent {
  @Input ()config:any;
  value=false;

  constructor(private eventBusService:EventBusService,
              private _eventBus:EventBusService){

  }
  getIconColorClass():string{
    return this._eventBus.getIconColorClass(!this.value,this.config);
    
  }
  processReceivedData(data:any){
    console.log('Datos recibidos: ', data);
    //var dat=JSON.parse(data);
    this.value=data.value;

  }

  ngOnInit(): void {
    const topic=this.config.userId+"/"+this.config.selectedDevice.dId+"/"+this.config.variable+"/sdata";

    this.eventBusService.on(topic).subscribe(data=>{
      this.processReceivedData(data);
    })
    console.log('Iotindicator->ngOnInit-topic: '+topic)
  }

  ngOnDestroy(): void {
    const topic=this.config.userId+"/"+this.config.selectedDevice.dId+"/"+this.config.variable+"/sdata";
  
    this.eventBusService.off(topic);

  }

}
