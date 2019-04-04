import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SimpleComponent } from './simple/simple.component';
import { IframeComponent } from './iframe/iframe.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'ng2/welcome', component: WelcomeComponent },
      { path: 'ng2/simple', component: SimpleComponent },
      { path: 'classic' , children: [{
        path:"**", component: IframeComponent
      }] },
      {
        path: '',
        redirectTo: '/ng2/welcome',
        pathMatch: 'full'
      },
      { path: '**', component: WelcomeComponent },
    ]
  }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
