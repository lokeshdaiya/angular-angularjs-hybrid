import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import * as angular from 'angular';
import { setAngularJSGlobal } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';
import { NG1AppModule } from './app/ng1.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
setAngularJSGlobal(angular);

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(ref => {
    const upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, [NG1AppModule.name]);
  })
  .catch(err => console.error(err));
