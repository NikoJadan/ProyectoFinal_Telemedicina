import { Component, Input } from '@angular/core';
import { EventBusService } from 'src/app/services/event-bus.service';

@Component({
  selector: 'app-iotbutton',
  templateUrl: './iotbutton.component.html',
  styles: [
  ]
})
export class IotbuttonComponent {
@Input() config:any;
sending=false;
value=true;

sendValue(){
  this.sending=true;
  setTimeout(() => {this.sending=false}, 2000);
  const topic='mqtt-sender';
  const toSend={
    topic:this.config.userId+"/"+this.config.selectedDevice.dId+"/"+this.config.variable+"/acdata",
    msg:{
      value:this.config.message
    }
  }
  this._eventBus.emit(topic,toSend);
}

constructor(private _eventBus:EventBusService){

}
getIconColorClass():string{
  if(this.sending){
    return "text-dark";
  }
  if(!this.value){
    return "text-dark";
  }
  if(this.config.class=="success"){
    return "text-success";
  }
  if(this.config.class=="primary"){
    return "text-primary";
  }
  if(this.config.class=="warning"){
    return "text-warning";
  }
  if(this.config.class=="danger"){
    return "text-danger";
  }else{
    return"";
  }

}
}
