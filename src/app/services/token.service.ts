import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

constructor() { }

  getToken(){
    let token: any = { logged: false };

    if(localStorage.getItem("token") != null){
      token = JSON.parse(localStorage.getItem("token"));
    }

    return token.logged;
  }
}
