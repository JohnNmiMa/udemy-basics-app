import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', attribute selector
  // selector: '.app-servers',  class selector
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(name) {
    this.serverCreated = true;
    this.servers.push(name);
    this.serverCreationStatus = 'Server was created. Name is ' + name;
  }

/*  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }*/

}
