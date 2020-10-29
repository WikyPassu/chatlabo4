import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.login();
  }

  async login(){
    try{
      const rta = await this.auth.signInWithEmailAndPassword("admin@admin.com", "123456");
      this.auth.currentUser
      .then(user => console.log(user))
      .catch(error => console.log(error))
      console.log(rta);
    }
    catch(error){
      console.log(error);
    }
  }
}
