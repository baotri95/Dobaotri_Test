import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit, OnChanges {
  @Input()
  version: any;
  @Input()
  generation: any;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

}
