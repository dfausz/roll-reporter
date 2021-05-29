import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-character-name-dialog',
  templateUrl: './character-name-dialog.component.html',
  styleUrls: ['./character-name-dialog.component.scss']
})
export class CharacterNameDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CharacterNameDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {name: string}) { }

  ngOnInit(): void { }

  closeDialog(name) {
    this.dialogRef.close(name);
  }
}
