import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found/pagenotfound.component";
import {HomeComponent} from "./home/home.component";
import {CookieService} from "ngx-cookie-service";
import {HomeRouteGuardService} from "./route-guard/home-route-guard.service";

const routeConst: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'home', canActivate: [HomeRouteGuardService], component: HomeComponent
  },
  {
    path: '**' , component: PageNotFoundComponent
  }

];

@NgModule({
  declarations: [
    AppComponent, LoginComponent, PageNotFoundComponent, HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, AmexioWidgetModule,
    RouterModule.forRoot(routeConst)
  ],
  providers: [CookieService, HomeRouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
