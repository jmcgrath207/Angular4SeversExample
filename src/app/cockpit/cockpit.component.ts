import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

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
/*  newServerContent = '';*/
@ViewChild('serverControlInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
  });
  }

  onAddBlueprint(serverNameInput) {
  this.blueprintCreated.emit({
    serverName: serverNameInput.value,
    serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
