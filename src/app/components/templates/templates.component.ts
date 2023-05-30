import { Component } from '@angular/core';
import { EventBusService } from 'src/app/services/event-bus.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styles: [
  ]
})
export class TemplatesComponent {
 value1=false; 
 value2=false; 
 value3=false; 
 value4=false; 
 topic1:string="userId/8881/var1/sdata";
 topic2:string="userId/8882/var2/sdata";
 topic3:string="userId/8883/var3/sdata";
 topic4:string="userId/8884/var4/sdata";

 configButton={
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
  column:"col-6",
  widget:"indicator",
  class:"success",
  message:"{'status':'stop'}"
}

 config1={
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
  column:"col-6",
  widget:"indicator",
  class:"success"
}

config2={
  userId:'userId',
  selectedDevice:{
    name:"oficina",
    dId:"8882",
    template:"Sensor Potencia",
    templateId:"asdfghjkl",
    saverRule:false

  },
  variableFullName:"Bomba",
  variable:"var2",
  icon:"fa-sun",
  column:"col-6",
  widget:"indicator",
  class:"danger"
}

config3={
  userId:'userId',
  selectedDevice:{
    name:"hogar",
    dId:"8883",
    template:"Sensor Potencia",
    templateId:"asdfghjkl",
    saverRule:false

  },
  variableFullName:"Bomba",
  variable:"var3",
  icon:"fa-sun",
  column:"col-6",
  widget:"indicator",
  class:"warning"
}

config4={
  userId:'userId',
  selectedDevice:{
    name:"oficina2",
    dId:"8884",
    template:"Sensor Potencia",
    templateId:"asdfghjkl",
    saverRule:false

  },
  variableFullName:"Bomba",
  variable:"var4",
  icon:"fa-sun",
  column:"col-6",
  widget:"indicator",
  class:"dark"
}

 constructor(private _eventBus:EventBusService){
 }
  sendData1(){
    this.value1=!this.value1;
    console.log('El valor en templates es: ',this.value1);
    this._eventBus.emit(this.topic1,{value:this.value1});

  }
  sendData2(){
    this.value2=!this.value2;
    console.log('El valor en templates es: ',this.value2);
    this._eventBus.emit(this.topic2,{value:this.value2});

  }
  sendData3(){
    this.value3=!this.value3;
    console.log('El valor en templates es: ',this.value3);
    this._eventBus.emit(this.topic3,{value:this.value3});

  }
  sendData4(){
    this.value4=!this.value4;
    console.log('El valor en templates es: ',this.value4);
    this._eventBus.emit(this.topic4,{value:this.value4});

  }

}
