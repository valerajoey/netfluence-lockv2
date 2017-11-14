import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth'
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  user =  {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  async signUp(user: User){
  	//if api connection is available code's here'
    
  try {
    const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    console.log(result);
  }
  	catch(e){
      console.error(e);
    }
  }

}
