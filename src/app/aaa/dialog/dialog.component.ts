import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'rks-dialog',
  templateUrl: 'dialog.component.html'
})
export class DialogComponent implements OnInit {
  hasAddress = false;
  isVIP = false;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.hasAddress = Object.keys(this.data.address).length > 0;
    this.isVIP = this.data.level > 0;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
