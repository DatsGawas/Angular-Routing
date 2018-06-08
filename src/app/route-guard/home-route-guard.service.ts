/**
 * Created by dattaram on 19/4/18.
 */
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class HomeRouteGuardService implements CanActivate {
  constructor(private _cookieService: CookieService, private route: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this._cookieService.get('username') == 'dats') {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
