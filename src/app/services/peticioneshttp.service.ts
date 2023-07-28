import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UiServiceService } from './ui-service.service';
import { Token } from '@angular/compiler';
import { IDevice, ITemplate } from './mng-widgets.service';

const URL=environment.url;
export interface Usuario{
  _id?:string,
  nombre?:string,
  email?:string,
  password?:string
}


@Injectable({
  providedIn: 'root'
})
export class PeticioneshttpService {
  token:string;
  expiresIn:number;
  devices:IDevice[];
  templates:ITemplate[]=[];
  constructor(private http:HttpClient,
              private _uiService:UiServiceService) {

  }

  cargarToken(){
    if(!this.token){
      this.token=localStorage.getItem('token')||'';
      this.expiresIn=Number(localStorage.getItem('expiresIn')||'0');
    }
  }
  guardarToken(token:string, expiresIn:number){
    this.token=token;
    this.expiresIn=expiresIn;
    localStorage.setItem('token',token);
    localStorage.setItem('expiresIn',this.expiresIn.toString());
  }
  isAuthenticated():boolean{
    this.cargarToken();
    if(!this.token||this.token==='undefined'|| this.token===undefined)return false;
    if(this.token.length<10) return false; //crear una función que valide el token
    const timeOK=this.expiresIn >=(Date.now()/1000);
    if(timeOK)
    {
      return true;
    }else{
      this.token='';
      localStorage.clear();
      this._uiService.alertaError('Token Inválido-tiempo agotado');
      return false;
    }
  }
  login(email:string, password:string){
    const data={email,password};
    console.log('en peticionesHttp-:login-:data:',data);
    return new Promise(resolve=>{


      this.http.post('http://127.0.0.1:3000/user/login',data)
              .subscribe(resp=>{
                console.log('En peticionesHttp->login->resp:',resp);
                if(resp['ok']){
                  this.guardarToken(resp['token'],resp['expiresIn']);
                  resolve(true);
                }else{
                  this.token='';
                  localStorage.clear();
                  this._uiService.alertaError(resp['mensaje']);
                  resolve(false);

                }
              });
    })
  }

  register(usuario:Usuario){
    return new Promise(resolve=>{
      try {
        this.http.post(`${URL}/user/create`, usuario)
                  .subscribe(resp=>{
                    console.log('En peticionesHttp->register->resp:',resp);
                    if(resp['ok']){
                      this.guardarToken(resp['token'],resp['expiresIn']);
                      resolve(true);
                    }else{
                      this.token='';
                      localStorage.clear();
                      this._uiService.alertaError(resp['err'].errors.email.message);
                      resolve(false);
                    }
                  })
      }catch(error){
        console.log('error en peticionesHttp->register : ',error);
        this._uiService.alertaError('ERROR desconocido en Registro de nuevo usuario');
        resolve(false);
      }
    })
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////
// MANEJO DE DEVICES
/////////////////////////////////////////////////////////////////////////////////////////////////////
 getDevices():Promise<IDevice[]>{
    const headers=new HttpHeaders({'x-token':this.token});
    return new Promise<IDevice[]>(resolve=>{

      this.http.get(`${URL}/api/device`,{headers:headers})
               .subscribe(resp=>{
                console.log('peticionesHttp.service->getDevices->resp:',resp);
                let devices:IDevice[]=[];
                if (resp['deviceDB'])
                   devices=resp['deviceDB'];
                this.devices=devices;
                resolve(devices);
               })
    });
  }
  addDevice(device:IDevice):Promise<boolean>{
    const headers=new HttpHeaders({'x-token':this.token});
    try{
      return new Promise<boolean>(resolve=>{
        const data:IDevice={
          dId:device.dId,
          name:device.name,
          templateId:device.templateId,
          templateName:device.templateName
        }
        this.http.post(`${URL}/api/device`,data,{headers:headers})
                  .subscribe(resp=>{
                    console.log('PeticionesHttp->addDevice->resp:',resp);
                    if(resp['ok']){
                      this.devices.push(data);
                      return resolve(true);
                    }else{
                      if(resp['mensaje']!==undefined){
                        this._uiService.alertaError('Error en addDevice: '+resp['mensaje']+'-dId:'+device.dId);
                        return resolve(false);
                      }else{
                        this._uiService.alertaError('Error en addDevice: dId:' +device.dId);
                        return resolve(false);

                      }
                    }
                  })    ;
      });
    }catch(error){
      console.log('Error en peticioneshtpp->addDevice->error:',error);
      this._uiService.alertaError('Error en addDevice: dId:' +device.dId);
      return Promise.resolve(false);
    }

  }
/////////////////////////////////////////////////////////////////////////////////////////////////////
// MANEJO DE TEMPLATES
/////////////////////////////////////////////////////////////////////////////////////////////////////
   async readTemplates(){

    if(this.templates.length==0){
      await this.getTemplates();
    }
      return this.templates;

   }
   saveTemplate(template:ITemplate){
    const header=new HttpHeaders({'x-token':this.token});
    //console.log('petionesHttp_service->saveTemplate->template:',template);
    try{
      return new Promise<boolean>(resolve=>{
        this.http.post(`${URL}/widgets/template`,{template},{headers:header})
        .subscribe(resp=>{
          if(resp['ok']){
            return resolve(true);
          }else{
            return resolve(false);
          }
        })
      });
    }catch(error){
      console.log('Error en peticiones Http_service en saveTemplate(...)', error);
      this._uiService.alertaError('Error en peticionesHttp->saveTemplate()');
      return Promise.resolve(false);
    }
   }
   getTemplates():Promise<ITemplate[]>{
      const header=new HttpHeaders({'x-token':this.token});
      //console.log('petionesHttp_service->saveTemplate->template:',template);
      try{
        return new Promise<ITemplate[]>(resolve=>{
          this.http.get(`${URL}/widgets/template`,{headers:header})
                   .subscribe(resp=>{
                    let templates1:ITemplate[]=[];
                    if(resp['templateBD']){
                    templates1=resp['templateBD'];
                    }
                    this.templates=templates1;
                    resolve(this.templates);
          })
        });
      }catch(error){
        console.log('Error en peticiones Http_service en saveTemplate(...)', error);
        this._uiService.alertaError('Error en peticionesHttp->saveTemplate()');
        return Promise.resolve([]);

     }
   }
   deleteTemplate(template:ITemplate):Promise<boolean>{
    const header=new HttpHeaders({'x-token':this.token});
    //console.log('petionesHttp_service->saveTemplate->template:',template);
    try{
      return new Promise<boolean>(resolve=>{
        this.http.delete(`${URL}/widgets/template`,{headers:header,body:{idTemplate:template._id}})
        .subscribe(resp=>{
          if(resp['ok']){
            console.log('en PeticionesHttp->deleteTemplate,resp:',resp);
            return resolve(true);
          }else{
            return resolve(false);
          }
        })
      });
    }catch(error){
      console.log('Error en peticiones Http_service en deleteTemplate(...)', error);
      this._uiService.alertaError('Error en peticionesHttp->deleteTemplate()');
      return Promise.resolve(false);
    }
   }
}
