/**
 * Created by dattaram on 19/4/18.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  template:`
    
      <amexio-button [label]="'lazy load'"
                     [type]="'theme-color'">
      </amexio-button>
      <amexio-button (onClick)="loadChild()" [label]="'load child component'"
                     [type]="'green'" >
      </amexio-button>
      <amexio-button [label]="'Auxilary route'"
                     [type]="'red'" >
      </amexio-button>

      <amexio-button  (onClick)="loadResolveChild()" [label]="'Resolve Interface'"
                     [type]="'red'" >
      </amexio-button>
  
    
    <router-outlet></router-outlet>


  `
})

export class HomeComponent implements OnInit {
  constructor(public routeState: Router) {
    console.log(this.routeState.routerState);
  }

  ngOnInit() {
  }

  loadChild() {
    this.routeState.navigate(['/home/profile']);
  }

  loadResolveChild() {
    this.routeState.navigate(['/home/resolve']);

  }
}
