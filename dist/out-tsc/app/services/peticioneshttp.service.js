import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
const URL = environment.url;
export let PeticioneshttpService = class PeticioneshttpService {
    constructor(http, _uiService) {
        this.http = http;
        this._uiService = _uiService;
    }
    cargarToken() {
        if (!this.token) {
            this.token = localStorage.getItem('token') || '';
            this.expiresIn = Number(localStorage.getItem('expiresIn') || '0');
        }
    }
    guardarToken(token, expiresIn) {
        this.token = token;
        this.expiresIn = expiresIn;
        localStorage.setItem('token', token);
        localStorage.setItem('expiresIn', this.expiresIn.toString());
    }
    isAuthenticated() {
        this.cargarToken();
        if (!this.token || this.token === 'undefined' || this.token === undefined)
            return false;
        if (this.token.length < 10)
            return false; //crear una función que valide el token
        const timeOK = this.expiresIn >= (Date.now() / 1000);
        if (timeOK) {
            return true;
        }
        else {
            this.token = '';
            localStorage.clear();
            this._uiService.alertaError('Token Inválido-tiempo agotado');
            return false;
        }
    }
    login(email, password) {
        const data = { email, password };
        console.log('en peticionesHttp-:login-:data:', data);
        return new Promise(resolve => {
            this.http.post('http://127.0.0.1:3000/user/login', data)
                .subscribe(resp => {
                console.log('En peticionesHttp->login->resp:', resp);
                if (resp['ok']) {
                    this.guardarToken(resp['token'], resp['expiresIn']);
                    resolve(true);
                }
                else {
                    this.token = '';
                    localStorage.clear();
                    this._uiService.alertaError(resp['mensaje']);
                    resolve(false);
                }
            });
        });
    }
    register(usuario) {
        return new Promise(resolve => {
            try {
                this.http.post(`${URL}/user/create`, usuario)
                    .subscribe(resp => {
                    console.log('En peticionesHttp->register->resp:', resp);
                    if (resp['ok']) {
                        this.guardarToken(resp['token'], resp['expiresIn']);
                        resolve(true);
                    }
                    else {
                        this.token = '';
                        localStorage.clear();
                        this._uiService.alertaError(resp['err'].errors.email.message);
                        resolve(false);
                    }
                });
            }
            catch (error) {
                console.log('error en peticionesHttp->register : ', error);
                this._uiService.alertaError('ERROR desconocido en Registro de nuevo usuario');
                resolve(false);
            }
        });
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // MANEJO DE DEVICES
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    getDevices() {
        const headers = new HttpHeaders({ 'x-token': this.token });
        this.http.get(`${URL}/api/device`, { headers: headers })
            .subscribe(resp => {
            console.log('peticionesHttp.service->getDevices->resp:', resp);
        });
    }
};
PeticioneshttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PeticioneshttpService);
//# sourceMappingURL=peticioneshttp.service.js.map