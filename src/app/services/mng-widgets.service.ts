import { Injectable } from '@angular/core';

export interface ITemplate{
  _id?: string,
  userId: string,
  name: string,
  description?: string,
  createdTime?: Number,
  widgets?: Array<IConfigW>,
}
export interface IDevice{
  name: string,
  dId: string,
  //template?: ITemplate,
  templateId?: string,
  templateName?:string,
  selected?: boolean,
  saverRule?: boolean,
  alarmRules?: any[]
}

export interface IConfigW{
  userId:string,
    selectedDevice:IDevice,
    variableFullName:string,
    variable:string,
    variableType:string,
    variableSendFreq?:number,
    unit?:string,
    decimalPlaces?:number,
    chartTimeAgo?:number,
    icon:string,
    columnWidth:string,
    widget?:string,
    class:string,
    message?:string,
    text?:string,
    demo?:boolean
}

@Injectable({
  providedIn: 'root'
})
export class MngWidgetsService {
  templates = [];
  widgets: IConfigW[]=[];
  widgetType = ['numerChart','indicator','map','switch','button'];
  readTypeWidgets(type:number){
    if(type<this.widgetType.length)
    {
      return this.widgetType[type];
    }
    return "";
  }

  readWidgets():IConfigW[]{
    return this.widgets;
  }

  addNewWidget(newWidget: IConfigW){
    this.widgets.push(JSON.parse(JSON.stringify(newWidget)));
  }

  delNewWidget(pos:number){
    if(pos<this.widgets.length){
      this.widgets.splice(pos,1);
    }
  }

  constructor() { }
}
