import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule//this import is necessary for using forms (input in my case)
  ],
  providers: [],
  bootstrap: [AppComponent]//list of all components, tha should be known by Angular at the point of time it analyses the index.html file
})
export class AppModule { }
