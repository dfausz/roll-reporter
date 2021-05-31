import { Component, OnInit, Input } from '@angular/core';
import { Log } from '../log';
import { DataService } from '../data.service';

@Component({
  selector: 'app-log-input',
  templateUrl: './log-input.component.html',
  styleUrls: ['./log-input.component.scss']
})
export class LogInputComponent implements OnInit {
  @Input() CharacterName = null;

  randomNames = [
    "Broseph",
    "Vincent Van Brogh",
    "Brometheus",
    "Angelina Brolie",
    "Brobi-Wan Kanobi",
    "Brofessor X",
    "Wolfgang Amadeus Brozart"
  ]

  damageTypes = [
    "Acid",
    "Cold",
    "Fire",
    "Lightning"
  ]

  types = [
    "Check",
    "To Hit",
    "Damage"
  ]

  selectedType = "Check";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    if(this.CharacterName === null) {
      const randomName = this.randomNames[Math.floor(Math.random() * this.randomNames.length)];
      this.CharacterName = randomName;
    }
  }

  submit(amount, type, damageType) {
    let log: Log = {
      Character: this.CharacterName,
      Amount: amount,
      Type: type,
      DamageType: type === "Damage" ? damageType : "None"
    }
    
    if(amount != "") {
      this.dataService.CreateLog(log);
    }
  }

}
