import { Component,  OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PlatformLocation } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class AppComponent implements OnInit {
  title = 'app';
 private pathString: any;
   constructor(
     private location: Location
  ) {

  }
  ngOnInit() {
 this.pathString = (this.location as any)._platformStrategy._platformLocation._location.origin;
    console.log( this.pathString);
  }
}
