import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as material from '@angular/material';
import { UserService } from './aaa/services/user.service';
import { AaaGridComponent } from './aaa/grid/aaa-grid.component';
import { DialogComponent } from './aaa/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AaaGridComponent,
    DialogComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    material.MatTableModule,
    material.MatDialogModule,
    material.MatPaginatorModule,
    material.MatSortModule,
    material.MatButtonModule,
    material.MatIconModule,
    material.MatFormFieldModule,
    material.MatInputModule,
    material.MatCheckboxModule,
    material.MatCardModule,
    material.MatDividerModule,
    material.MatSliderModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
