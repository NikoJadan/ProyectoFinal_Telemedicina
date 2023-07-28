import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PeticioneshttpService } from '../services/peticioneshttp.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard {
  constructor(private _peticionesHttp:PeticioneshttpService,
              private router:Router){

  }
  canActivate:CanActivateFn=(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree =>{
       if(this._peticionesHttp.isAuthenticated())
          return true;
       else
          return this.router.parseUrl('/login');
  }

}
