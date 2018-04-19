/**
 * Created by dattaram on 19/4/18.
 */

import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'resolve',
  template:`    
  `
})

export class ResolveComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}



@Injectable()
export class ResolveService implements Resolve {
  constructor(private _http: HttpClient) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   this.getData();
  }

  getData() {
    let data: any;
    this._http.get('/assets/country.json').subscribe(
      response => {
        data = response;
      },
      err => {},
      () => {
        console.log(JSON.stringify(data);
      });
  }






}
