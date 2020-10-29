import { Component, OnInit } from '@angular/core';
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario:string = "";
  mensajes = new Array();
  mensaje: string;

  constructor(private db: StorageService) { }

  ngOnInit(): void {
    this.db.traerListaMensajes().subscribe(doc => {
      this.mensajes = doc;
      
      this.mensajes = this.mensajes.sort((a, b) => {
        let flag : number = 0;
        if (a.milisegundos < b.milisegundos) {
          flag = -1;
        }
        else if (a.milisegundos > b.milisegundos) {
          flag = 1;
        }
        return flag;
      });
    });
  }

  async enviarMensaje(){
    if(this.mensaje != "" && this.usuario != ""){
      let fecha = Date.now();
      let id = this.usuario + "." + fecha;
      this.db.guardarMensaje(id, this.usuario, this.mensaje, fecha);
    }
  }
}
