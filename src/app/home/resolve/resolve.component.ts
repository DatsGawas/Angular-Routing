/**
 * Created by dattaram on 19/4/18.
 */

import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'resolve',
  template:`    
    
    <h1>Resolve</h1>
  `
})

export class ResolveComponent implements OnInit {
 /* constructor() {
  }

  ngOnInit() {
  }
*/
}



@Injectable()
export class ResolveService {
}
 /* resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  // this.getData();
    console.log('Im Resolve');
  }*/
