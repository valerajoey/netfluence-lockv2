import { Component } from '@angular/core';
import {  NavController, ToastController } from 'ionic-angular';

import { Profile } from './../../models/profile'
import { AngularFireAuth } from 'angularfire2/auth';
//import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-contact',
  templateUrl: 'home.html'
})
export class HomePage {
	profileData: FirebaseObjectObservable<Profile>

  constructor(  private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
  				 private toast: ToastController,
  				public navCtrl: NavController
  			 ) {

  }

   ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
	    if (data && data.email && data.uid){
	    	this.toast.create({
	    		message: `Welcome to APP_NAME, ${data.email}`,
	    		duration: 3000
	    	}).present();

	    	this.profileData = this.afDatabase.object(`profile/${data.uid}`);
	    } 
	    else {
	    	this.toast.create({
	    		message: `Could not find authentication`,
	    		duration: 3000
	    		}).present();
	    	}
    
		});
	}
}
