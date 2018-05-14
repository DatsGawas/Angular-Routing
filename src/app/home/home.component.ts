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
      <amexio-button (onClick)="loadAuxChild()" [label]="'Auxilary route'"
                     [type]="'red'" >
      </amexio-button>

      <a [routerLink]="[{ outlets: { 'aux11': ['aux']}}]">Employee Manager</a>

      <amexio-button  (onClick)="loadResolveChild()" [label]="'Resolve Interface'"
                     [type]="'red'" >
      </amexio-button>
      
      <a (click)="repeatRoute()">Department</a>


      <router-outlet></router-outlet>


      <router-outlet name="aux11"></router-outlet>



  `
})

export class HomeComponent implements OnInit {
  constructor(public routeState: Router) {
    console.log(this.routeState.routerState);
  }

  ngOnInit() {
  }

  loadChild() {
    this.routeState.navigate(['/home/profile/', 2]);
  }

  loadResolveChild() {
    this.routeState.navigate(['/home/resolve']);

  }

  loadAuxChild() {
   // this.routeState.navigate([{ outlets: {'aux11': ['aux']}]);

    //this.routeState.navigate(['aux', { outlets: { 'aux': []}}]);


  }
  repeatRoute() {
    this.routeState.navigate(['/home/department-list']);

  }
}
