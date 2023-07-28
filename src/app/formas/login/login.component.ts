import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeticioneshttpService } from 'src/app/services/peticioneshttp.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
    user={
    email:"",
    password:""
  }

  constructor(private _peticionesHttp:PeticioneshttpService,
              private router:Router,
              private _uiServices:UiServiceService){

  }
  login(){
    console.log("Usuario",this.user);
    this._peticionesHttp.login(this.user.email,this.user.password)
                        .then(val=>{
                          console.log('login ok',val);
                          if(val)
                            this.router.navigateByUrl('/dashboard');
                        })
                        .catch(err=>{
                          console.log("ERROR en Login: ", err);
                          this._uiServices.alertaError('Error no definido en Login');

                        })
  }
}
