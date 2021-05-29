import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Log } from '../log';

@Component({
  selector: 'app-game-log',
  templateUrl: './game-log.component.html',
  styleUrls: ['./game-log.component.scss']
})
export class GameLogComponent implements OnInit {
  Logs: Array<Log> = [];
  CharacterName: string;

  constructor(private dataService: DataService) { }
  
  async ngOnInit() {
   this.dataService.SubscribeToLogs(this.UpdateLogs, this);
   this.CharacterName = localStorage.getItem("characterName");
  }

  UpdateLogs(logs, gameLogComponent) {
    gameLogComponent.Logs = logs;
  }

  OnUpdateCharacterName(name) {
    this.CharacterName = name;
  }
}
