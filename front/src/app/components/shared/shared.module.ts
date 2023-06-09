import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatChipsModule,
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatTableModule,
    MatChipsModule,
  ],
  providers:[
    {
      provide:MatDialogRef,
      useValue:{}
    }
  ]
})
export class SharedModule { }
