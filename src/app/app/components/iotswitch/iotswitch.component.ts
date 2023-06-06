import { Component, Input } from '@angular/core';
import { EventBusService } from 'src/app/services/event-bus.service';

@Component({
  selector: 'app-iotswitch',
  templateUrl: './iotswitch.component.html',
  styles: [
  ]
})
export class IotswitchComponent {
  @Input() config:any;
  value=false;
  sending=false;

  constructor(private _eventBus:EventBusService){

  }
getIconColorClass():string{
  return this._eventBus.getIconColorClass(this.sending || !this.value, this.config);
  

}
  sendValue(){
    this.sending=true;
    const toSend={
      topic: this.config.userId+"/"+this.config.selectedDevice.dId+"/"+this.config.variable+"/acdata",
      msg:{
        value:this.config.message

      }
    }
    this._eventBus.emit('mqqt-sender',toSend);
    this.sending=false;
  }


}
