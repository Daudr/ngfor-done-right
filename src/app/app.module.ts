import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';

import { TrackByComponent } from './components/track-by/track-by.component';
import { OddEvenComponent } from './components/odd-even/odd-even.component';
import { FirstLastComponent } from './components/first-last/first-last.component';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule],
  declarations: [AppComponent, TrackByComponent, OddEvenComponent, FirstLastComponent, IndexComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
