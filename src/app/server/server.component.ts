import { Component } from '@angular/core';

@Component({
  selector: 'app-server',//the html-tag, which can be used later in other component's templates for addint this component
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus() {
    return this.serverStatus;
  };
}
