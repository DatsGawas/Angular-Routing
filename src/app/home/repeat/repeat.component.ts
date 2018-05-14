/**
 * Created by dattaram on 4/5/18.
 */
import {Component, OnInit} from '@angular/core';
import {CountryService} from "../profile/country.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'repeat',
  template:`
    <ul>
      <li (click)="onSelect(data)" *ngFor="let data of departmentList ">
        {{data.name}}
      </li>
    </ul>
  `
})

export class RepeatComponent implements OnInit {
  private departmentList: any;
  constructor(private _service: CountryService, private _router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._service.getDepartmentDdata().subscribe(
      data => {
        this.departmentList = data;
      }
    );
  }

  onSelect(dept: any) {
   // this._router.navigate(['/home/department', dept.id]);

    /* relative path*/

    this._router.navigate([dept.id],{relativeTo:this.route});
  }

}
