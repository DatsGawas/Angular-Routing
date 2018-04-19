/**
 * Created by dattaram on 19/4/18.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  template:`

    <amexio-btn-group>
      <amexio-button [label]="'lazy load'"
                     [type]="'theme-color'">
      </amexio-button>
      <amexio-button [label]="'load component'"
                     [type]="'green'" >
      </amexio-button>
      <amexio-button [label]="'Auxilary route'"
                     [type]="'red'" >
      </amexio-button>
    </amexio-btn-group>


  `
})

export class HomeComponent implements OnInit {
  constructor(public routeState: Router) {
    debugger
    console.log(this.routeState.routerState);
  }

  ngOnInit() {
  }
}
