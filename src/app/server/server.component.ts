import { Component } from '@angular/core';

@Component({
  selector: 'app-server',//the html-tag, which can be used later in other component's templates for addint this component
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  };

  getColor(){
    return this.serverStatus === 'online' ? '#28a745' : '#dc3545';
  }
}
