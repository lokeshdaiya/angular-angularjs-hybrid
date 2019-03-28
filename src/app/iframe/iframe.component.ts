import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-test',
  styles:[`
  iframe {
    // position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border:0;
    height: 300px;
  }

  `],
  template: `

    <section >
    <div *ngIf="loading"> loadding....</div>
    <iframe #iframe (load)="test()"></iframe>
    </section>

	`
})

export class IframeComponent implements OnInit {
  // url;
  // loading;
  // @ViewChild('iframe') iframe: ElementRef

  // constructor(private route: ActivatedRoute,
  //     private sanitizer: DomSanitizer,
  //      private router: Router) {
  //   this.loading = true;
  //   this.listenForFallbackRoutingEvents();
  // }

  ngOnInit() {
    // this.route.url.subscribe((urlSegments: any) => {
    //   console.log(urlSegments);
    //   this.iframe.nativeElement.src = `${environment.classicBaseUrl}${urlSegments[0].path}`;
    //    // this.url=  this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.classicBaseUrl}${urlSegments[0].path}`);
    // });
  }



  // change() {
  //   //this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://rawgit.com/start-angular/ani-theme/master/dist/index.html#/login')
  //   this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:3000/#/form')
  //   // if(location.pathname.indexOf('welcome')!= -1) {
  //   //   this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:3000/#/form')
  //   // } else {
  //   //   this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:3000/#/welcome')
  //   // }

  // }


  // /*
  //  If the iframed-in app can't resolve a URL itself it will post a message to the parent
  //  iframe (this app). Listen to those messages and attempt to navigate to that URL.
  //  */
  // listenForFallbackRoutingEvents() {
  //   // Create IE + others compatible event handler
  //   const eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
  //   const eventer = window[eventMethod];
  //   const messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";


  //   eventer(messageEvent, (e) => {
  //     if(!e.data.navigateTo) {
  //       e.data.navigateTo = 'welcome'
  //     }
  //     if (e.data.navigateTo) {
  //       console.log('parent received message!:  ', e.data);
  //       let url = e.data.navigateTo;
  //       console.log(url);
  //       this.router.navigateByUrl(url);
  //     }
  //   }, false);
  // }

  // test() {
  //   this.loading = false;
  // }
}
