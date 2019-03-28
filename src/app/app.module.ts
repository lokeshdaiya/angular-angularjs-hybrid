declare var angular: angular.IAngularStatic;
import { downgradeComponent } from '@angular/upgrade/static';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { UrlHandlingStrategy, UrlTree } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SimpleComponent } from './simple/simple.component';
import { IframeComponent } from './iframe/iframe.component';
import { NG1AppModule } from './ng1.module';
import {UpgradeHelper} from './upgradehelper';

export class hybridUrlStrategy implements UrlHandlingStrategy {
  urlPattern = '^\/$|^ng2\/|^\/ng2\/';
  shouldProcessUrl(url: UrlTree) {
    let urlExp = new RegExp(this.urlPattern);
    return urlExp.test(url.toString());

  }
  extract(url: UrlTree) {    return url;  }
  merge(url: UrlTree, whole: UrlTree) {    return url;  }
}


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SimpleComponent,
    IframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  providers: [
    UpgradeHelper,
    { provide: UrlHandlingStrategy, useClass: hybridUrlStrategy},
    { provide: '$location', useFactory: getLocationService, deps: ['$injector'] },

  ],
  bootstrap: [AppComponent],
  entryComponents: [WelcomeComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  // ngDoBootstrap() {
  //   this.upgrade.bootstrap(document.documentElement, [NG1AppModule.name]);
  // }
 }

 export function getLocationService(i: any) {
   return i.get('$location');
 }



 angular.module(NG1AppModule.name).directive('appWelcome',downgradeComponent({component: WelcomeComponent}) as angular.IDirectiveFactory);
