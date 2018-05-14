import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2', 'Testserver 3']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    // setInterval(() => {
    //   console.log(this.serverName);
    // }, 1000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created, name = '+ this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event){
    //console.log(event.target.value);
    this.serverName = event.target.value;
  }

}
