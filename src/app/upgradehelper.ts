import { Inject, Injector, Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class UpgradeHelper {
  constructor(private injector: Injector, private router: Router) {
  }

  navigate(path) {

    if (this.router.urlHandlingStrategy.shouldProcessUrl(this.router.parseUrl(path))) {
      // process only Ng2 routes based on pattern define in app.module.ts
      this.router.navigateByUrl(path);
    } else {
      // process only Ng1 routes
      const locationService = this.injector.get('$location');
      locationService.path(path);
    }




  }
}