import { Injectable } from '@angular/core';
import firebase  from 'firebase/app';
import 'firebase/database';
import { GameLogComponent } from './game-log/game-log.component';
import { Log } from './log';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dbUID = "";
  database: firebase.database.Database;

  constructor() { 
    this.database = firebase.database();
    this.dbUID = localStorage.getItem("dataServiceId");
  }

  SubscribeToLogs(updateLogs: Function, gameLogComponent: GameLogComponent)  {
    this.database.ref(`${this.dbUID}/logs`).on('value', (snapshot) => {
      if(snapshot.val()) {
        updateLogs(Object.values(snapshot.val()), gameLogComponent);
      }
      else {
        updateLogs([], gameLogComponent);
      }
    }, err => console.error(err));
  }

  CreateLog(log: Log){
    this.database.ref(`${this.dbUID}/logs`).push(log);
  }

  ClearLogs() {
    this.database.ref(`${this.dbUID}/logs`).remove();
  }
}
