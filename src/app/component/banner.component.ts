import { Component, ViewChild, AfterViewInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MyPostComponent } from './dynamic.Component';
import { PostItems } from './../../services/post-item';
import { DynamicComponentService } from './../../services/dynamiccomponent.service';

@Component({
    selector: 'app-banner',
    template: `
   <h1>lingarjan SVS Angular 2 Developer</h1>
   <app-mypost></app-mypost>
   <p>lingamayan</p>
    `,
    encapsulation: ViewEncapsulation.None

})
export class BannerComponent implements AfterViewInit, OnDestroy {
    @ViewChild(MyPostComponent)
    private myPostComponent: MyPostComponent;
    private postItems: PostItems[];
    private intervalId: any;
    private postIndex: number = -1;
    constructor(private dynamicComponentService: DynamicComponentService) {
console.log(MyPostComponent);
    }
    ngAfterViewInit() {
        this.postItems = this.dynamicComponentService.getAllPosts();
        console.log(this.postItems);
        this.startHighPost();
    }
    startHighPost() {
        this.intervalId = setInterval(() => {
            this.postIndex = (this.postIndex === this.postItems.length) ? 0 : this.postIndex + 1;
            console.log(this.postIndex);
            this.dynamicComponentService.loadComponent(this.myPostComponent.viewContainerRef, this.postItems[this.postIndex]);
        }, 5000);
    }
    ngOnDestroy() {
        clearInterval(this.intervalId);
    }

}