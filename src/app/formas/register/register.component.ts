import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeticioneshttpService } from 'src/app/services/peticioneshttp.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {
  user={
    nombre:"",
    email:"",
    password:""
  }
  constructor(private _peticionesHttp:PeticioneshttpService,
    private router:Router,
    private _uiServices:UiServiceService){

}
  register(){
    console.log('Register',this.user);
    this._peticionesHttp.register(this.user)
                         .then(val=>{
                          console.log('En register:val:',val);
                          if(val)
                            this.router.navigateByUrl('/dashboard');

                         })
                         .catch(err=>{
                          if(err.error.err.errors.message)
                             this._uiServices.alertaError('Error en registro:'+err.error.err.errors.message);
                          else
                             this._uiServices.alertaError('Error desconocido en registro');
                         })
  }
}
