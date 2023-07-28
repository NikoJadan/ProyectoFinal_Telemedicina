import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor() { }

  async alertaInformativa(msn:string){
    await Swal.fire({
      icon:'info',
      text:msn
    });
  }
  async alertaError(msn:string){
    await Swal.fire({
      icon:'error',
      title:'ERROR',
      text:msn
    });
  }
}
