import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

import { UserService } from '../services/user.service';

export interface User {
  name: string;
  email: string;
  phone: string;
  website: string;
  id: number;
  username: string;
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  };
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  };
}

@Component({
  selector: 'rks-aaa-grid',
  templateUrl: './aaa-grid.component.html',
  styleUrls: ['./aaa-grid.component.scss']
})

export class AaaGridComponent implements OnInit {
  title = 'my-first-AAA';
  records: User[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'email', 'phone', 'website'];
  dataSource: MatTableDataSource<User>;
  selection = new SelectionModel<User>(false, []);
  isSelected: boolean;

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((records: User[]) => {
        this.records = records;
        this.dataSource = new MatTableDataSource(records);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    this.selection.changed
      .subscribe((s) => {
        this.isSelected = this.selection.selected.length > 0;
        console.log(s.source.selected[0]);
      });
  }

  createUser() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '360px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (!result) {
        return;
      }
      this.records.push(result);
      this.refresh();
    });
  }

  editUser(editTarget) {
    if (!editTarget) {
      return;
    }
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '360px',
      data: editTarget
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  deleteUser(deleteTarget) {
    if (!deleteTarget) {
      return;
    }
    this.records = this.records.filter(itme => itme.id !== deleteTarget.id);
    this.refresh();
  }

  refresh() {
    this.selection.clear();
    this.dataSource = new MatTableDataSource(this.records);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
