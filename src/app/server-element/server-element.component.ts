import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {
  /*allow other components to grab variable Parent --> Child*/
  @Input('SrvElement') element: {type: string, name: string, content: string};

  constructor() {
    console.log('Constructor Called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit Called');
  }

}
