/**
 * Created by dattaram on 19/4/18.
 */

import {Component, OnInit} from '@angular/core';
import {CountryService} from "./country.service";

@Component({
  selector: 'profile',
  template:`
  <h1>profile</h1>
    {{countryData | json}}
    
    <template>
      
    </template>
  `
})

export class ProfileComponent implements OnInit {
  countryData:any;
  constructor(private _countryService: CountryService) {

  }
  ngOnInit() {
    this._countryService.getData().subscribe(
      data => {
        this.countryData = data;
      }
    );
  }
}


