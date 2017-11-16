import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from "../../models/user";
import { SignupPage } from '../signup/signup'; // importing sign up
import { WelcomePage } from '../welcome/welcome';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(ProfilePage);
      }  
    }
    catch (e) {
      console.error(e);
    }
  }


  signUp(){
  	this.navCtrl.push(ProfilePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
	