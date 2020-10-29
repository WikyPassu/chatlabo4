import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private db: AngularFirestore) { }

  public guardarMensaje(id:string,usuario:string,mensaje:string,milisegundos:number){
    return this.db.collection("mensajes").add({
      id: id,
      usuario: usuario,
      mensaje: mensaje,
      milisegundos: milisegundos
    });
  }

  public traerListaMensajes(){
    return this.db.collection("mensajes").valueChanges();
  }
}
