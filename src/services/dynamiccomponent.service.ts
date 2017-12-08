import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Post } from '../model/post';
import { PostItems } from './post-item';
import { DetailsComponent } from './../app/component/details.Component';

@Injectable()
export class DynamicComponentService {
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        console.log(this.componentFactoryResolver);
    }
    loadComponent(viewContainerRef: ViewContainerRef, postItem: PostItems) {
        const componentfactory = this.componentFactoryResolver.resolveComponentFactory(postItem.component);
        console.log(componentfactory);
        viewContainerRef.clear();
        const componentref = viewContainerRef.createComponent(componentfactory);
        console.log(componentref);
        const post: Post = componentref.instance;
        post.post = postItem.data;
        console.log(post.post);


    }
    getAllPosts() {
        return [
            new PostItems(DetailsComponent, { name: 'linagarajan', company: 'svs', designation: 'FullStackDeveloper' }),
            new PostItems(DetailsComponent, { name: 'Ranjan', company: 'svs', designation: 'MeanStackDeveloper' }),
            new PostItems(DetailsComponent, { name: 'Bala', company: 'svs', designation: 'UI Designer' }),
            new PostItems(DetailsComponent, { name: 'Praba', company: 'svs', designation: 'FullStackDeveloper' })
        ]
    }
}