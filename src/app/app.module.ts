import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyPostComponent } from './component/dynamic.Component';
import { DetailsComponent } from './component/details.Component';
import { BannerComponent } from './component/banner.component';
import { DynamicComponentService } from '../services/dynamiccomponent.service';
import { AppendComponent } from './component/render2/append-demo';
import { DynamicElementsComponent } from './component/render2/dynamic-element';



@NgModule({
  declarations: [
    AppComponent, BannerComponent, DetailsComponent, MyPostComponent, AppendComponent, DynamicElementsComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [DetailsComponent],
  providers: [DynamicComponentService],
  bootstrap: [ DynamicElementsComponent]
})
export class AppModule { }
