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
      subject.Complete();
      delete this.subjects[event];
    }
  }
  emit(event:string,data:any):void{
    let subject=this.subjects[event];
    if (subject){
      subject.next(data);
    }
  }

}
