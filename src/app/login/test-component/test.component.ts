/**
 * Created by dattaram on 5/6/18.
 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
   selector: 'test',
  template: `
  {{isTrue1}}
  `
})

export class TestComponent implements OnInit {

  @Input('isTrue-tt') isTrue1: string;
  constructor() {
  }

  ngOnInit() {
  }
}
