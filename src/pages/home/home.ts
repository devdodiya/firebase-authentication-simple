import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController,public authProvider: AuthProvider) {
    
  }
  logoutUserFromapp():void{
    this.authProvider.logoutUser().then( () => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
}
