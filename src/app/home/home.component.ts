import { Component, OnInit } from '@angular/core';
import { PlayerList } from './players.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() { }

    players = [];

    teamList = PlayerList.teams;
    playerList = PlayerList.players;

    ngOnInit() {
        this.selectPlayers();
    }

    convertInches(inches) {
        const feetFromInches = Math.floor(inches / 12);
        const inchesRemainder = inches % 12;
        const result = `${feetFromInches}' ${inchesRemainder}"`;

        return result;
    }

    reset() {
        for (let player of this.players) {
            player.isCorrect = false;
            player.isIncorrect = false;
        }
        this.players = [];
        this.selectPlayers();
    }

    selectPlayers(n: number = 3) {
        const shuffled = this.playerList.sort(() => 0.5 - Math.random());
        this.players = shuffled.slice(0, n) ;
    }

    guess(player, val: boolean) {
        const inTheLeague = player.tid !== (-1 || -2);

        if (inTheLeague === val) {
            player.isCorrect = true;
        } else {
            player.isIncorrect = true;
        }
    }
}
