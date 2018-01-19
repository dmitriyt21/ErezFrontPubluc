import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css' ,
              '../activities.component.css']
})
export class ChampionshipComponent implements OnInit {

    date = new Date();
    showChampionOfMonth : boolean;
    showChampionOfQuarter : boolean;

    constructor() { }

    ngOnInit() {
    }

    displayChampionOfMonth(){
        this.showChampionOfMonth =! this.showChampionOfMonth;
    }

    displayChampionOfQuarter(){
        this.showChampionOfQuarter =! this.showChampionOfQuarter;
    }
}
