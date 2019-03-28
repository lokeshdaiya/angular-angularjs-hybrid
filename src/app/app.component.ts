
import { Component, Injector } from '@angular/core';
import {UpgradeHelper} from './upgradehelper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngapp';
  constructor(private upgradeHelper: UpgradeHelper) {
  }

  ngOnInit() {
  }

  open(path) {
    this.upgradeHelper.navigate(path);
  }
}

