import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private subjects:Subject<any>[]=[];
  constructor() { }

  on(event:string):Observable<any>{
    let subject=this.subjects[event];
    if(!subject){
      subject=new Subject<any>();
      this.subjects[event]=subject;
    }
    return subject.asObservable();
  }
  off(event:string):void{
    let subject=this.subjects[event];
    if(subject){
      subject.complete();
      delete this.subjects[event];
    }
  }
  emit(event:string,data:any):void{
    let subject=this.subjects[event];
    if (subject){
      subject.next(data);
    }
    //console.log('topic:'+event+" datos:"+data.topic+data.msg.value);
    console.log('topic:'+event+" datos:"+data);
  }

  getIconColorClass(dark:boolean,config:any):string{
    if(dark){
      return"text-dark";
    }
    
    if(config.class=="success"){
      return "text-success";
    }
    if(config.class=="primary"){
      return "text-primary";
    }
    if(config.class=="warning"){
      return "text-warning";
    }
    if(config.class=="danger"){
      return "text-danger";
    }else{
      return"text-dark";
    }
  
  }

}
