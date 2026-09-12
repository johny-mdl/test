import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDTO } from '../../models/game.dto';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  game: GameDTO = this.navParams.get('game');

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {

  }

  ionViewWillEnter() {
    console.log("game " + JSON.stringify(this.game));
  }


}
