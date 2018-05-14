/**
 * Created by dattaram on 10/5/18.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CountryService {

  constructor(private _http: HttpClient) {
  }
  getData(): Observable<DataBind> {
   return this._http.get<DataBind[]>('/assets/country.json');
  }

  getDepartmentDdata() {
    return this._http.get('/assets/departmentdata.json');
  }
}

export interface DataBind {
  countryName: string;
  countryCode1: string;
}
