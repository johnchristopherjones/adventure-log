import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DataService } from './data.service';
import { IconService } from './icon.service';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),

    ComponentsModule,
  ],
  providers: [
    DataService,
    IconService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
