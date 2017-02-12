import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { DataService } from '../data.service';

import { SheetComponent } from './sheet/sheet.component';

const COMPONENTS = [
  SheetComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  providers: [DataService],
  exports: COMPONENTS
})
export class ComponentsModule { }
