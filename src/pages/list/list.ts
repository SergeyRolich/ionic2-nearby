import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController, public locations: LocationsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
