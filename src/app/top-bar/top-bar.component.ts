import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { CharacterNameDialogComponent } from '../character-name-dialog/character-name-dialog.component';
import { CreditsComponent } from '../credits/credits.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Output() nameUpdated = new EventEmitter<string>();

  constructor(private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void { }

  openCharacterNameDialog() {
    let currentCharacterName = localStorage.getItem("characterName");
    const dialogRef = this.dialog.open(CharacterNameDialogComponent, { data: { name: currentCharacterName } });
    dialogRef.afterClosed().subscribe(name => {
      if(name !== undefined) {
        localStorage.setItem("characterName", name);
        this.nameUpdated.emit(name);
      }
    })
  }

  clearLogs() {
    this.dataService.ClearLogs();
  }

  openCreditsDialog() {
    this.dialog.open(CreditsComponent);
  }
}
