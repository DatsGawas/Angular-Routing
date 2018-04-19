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
import {ProfileComponent} from "./home/profile/profile.component";
import {ResolveComponent, ResolveService} from "./home/resolve/resolve.component";
import {HttpClientModule} from "@angular/common/http";

const routeConst: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'home', canActivate: [HomeRouteGuardService], component: HomeComponent,
    children: [
      {
        path: 'profile', canActivateChild: [HomeRouteGuardService], component: ProfileComponent
      },
      {
        path: 'resolve', resolve: {user: ResolveService}, component: ResolveComponent
      }
    ]
  },
  {
    path: '**' , component: PageNotFoundComponent
  }

];

@NgModule({
  declarations: [
    AppComponent, LoginComponent, PageNotFoundComponent, HomeComponent, ProfileComponent, ResolveComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AmexioWidgetModule,
    RouterModule.forRoot(routeConst)
  ],
  providers: [CookieService, HomeRouteGuardService, ResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
