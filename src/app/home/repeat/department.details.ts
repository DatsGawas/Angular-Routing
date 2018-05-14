/**
 * Created by dattaram on 11/5/18.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'department-details',
  template:`
  
    <h3>
      Department Details:{{departmentId}}
    </h3>
    
    <a (click)="onPrevious()">Previous</a>
    <a (click)="onNext()">next</a>
    
    <a (click)="onBack()">Back</a>
  `
})

export class DepartmentDetailsComponent implements OnInit {
  departmentId: number;
  constructor(private route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {

    /* with snapshot */
   // this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));


    /* with out snapshot */
    this.route.paramMap.subscribe(
      (param: ParamMap) => {
        this.departmentId = parseInt(param.get('id'));
      }
    );
  }

  onPrevious() {
    let previousId = this.departmentId - 1 ;
    this._router.navigate(['/home/department', previousId]);
  }
  onNext() {
    let nextId = this.departmentId + 1 ;
   this._router.navigate(['/home/department', nextId]);
  }

  onBack() {
    this._router.navigate(['../',{id:this.departmentId}],{relativeTo:this.route});
  }
}
