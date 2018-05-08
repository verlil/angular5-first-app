import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule//this import is necessary for using forms (input in me case)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
