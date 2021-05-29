import { Component } from '@angular/core';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'roll-reporter';

  constructor () {
    firebase.initializeApp({
      databaseURL: "https://roll-reporter-default-rtdb.firebaseio.com"
    });
  }
}
