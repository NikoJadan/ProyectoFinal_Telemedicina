import { Component,EventEmitter, Output  } from '@angular/core';
import { IConfigW,MngWidgetsService } from 'src/app/services/mng-widgets.service';

@Component({
  selector: 'app-findicator',
  templateUrl: './findicator.component.html',
  styles: [
  ]
})
export class FindicatorComponent {
  @Output() config=new EventEmitter<IConfigW>();
  classes=['success','primary','warning','danger'];
  columnsWidth=['col-3','col-4','col-5','col-6','col-7','col-8','col-9',
                'col-10','col-11','col-12']
  iotIndicatorConfig:IConfigW={
    userId:'',
    selectedDevice:{
      name:"",
      dId:"",
      //template:"",
      templateId:"",
      saverRule:false
  
    },
    variableFullName:"",
    variable:"",
    variableType:"output",
    //variableSendFreq:0,
    unit:"",
    decimalPlaces:0,
    chartTimeAgo:0,
    icon:"fa-sun",
    columnWidth:"col-6",
    widget:"",
    class:"",//"danger","success","warning","primary",
    message:"",
    text:"",
  
  }

  constructor(private _mngWidget:MngWidgetsService){
    this.iotIndicatorConfig.widget=this._mngWidget.readTypeWidgets(4);
    
  }

  sendConfig(){
    this.config.emit(this.iotIndicatorConfig);
  }

}
