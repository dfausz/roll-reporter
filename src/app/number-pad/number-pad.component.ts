import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Log } from '../log';
import { DataService } from '../data.service';

@Component({
  selector: 'app-number-pad',
  templateUrl: './number-pad.component.html',
  styleUrls: ['./number-pad.component.scss']
})
export class NumberPadComponent implements OnInit {
  @Input() CharacterName
  @Input() Amount
  @Input() Type
  @Input() DamageType
  @Output() Submitted = new EventEmitter<void>()

  numbers = [[1,2,3],[4,5,6],[7,8,9]]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  changeNumber(number) {
    let logInput = document.getElementById('log-input-amount-input');
    logInput.innerText = logInput.innerText + number;
  }
  
  backspace() {
    let logInput = document.getElementById('log-input-amount-input');
    logInput.innerText = logInput.innerText.slice(0, -1);
  }

  submit() {
    let log: Log = {
      Character: this.CharacterName,
      Amount: this.Amount,
      Type: this.Type,
      DamageType: this.Type === "Damage" ? this.DamageType : "None"
    }
    
    if(this.Amount != "") {
      this.dataService.CreateLog(log);
    }

    this.Submitted.emit();
  }
}
