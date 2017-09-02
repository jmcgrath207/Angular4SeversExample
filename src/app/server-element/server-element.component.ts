import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
  /*allow other components to grab variable Parent --> Child*/
  @Input('SrvElement') element: {type: string, name: string, content: string};
  @Input() name;

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

  ngDoCheck() {
    console.log('ngDoCheck Called');
}

  ngAfterContentInit() {
  console.log('ngAfterContent Called');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit Called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Called');
  }

}
