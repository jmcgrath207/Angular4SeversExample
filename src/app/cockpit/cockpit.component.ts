import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /*allows variables to be grabbed by other components Child--> Parent */
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpcreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
/*  newServerName = '';*/
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent,
  });
  }

  onAddBlueprint(serverNameInput) {
  this.blueprintCreated.emit({
    serverName: serverNameInput.value,
    serverContent: this.newServerContent,
    });
  }

}
