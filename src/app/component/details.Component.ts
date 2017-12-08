import { Component, Input } from '@angular/core';
import { Post } from './../../model/post';
@Component({
    template: `
               <div style="background-color:red;width:25%;height:200px">
                <div style=" width:100%;text-align:center;padding:5px;" >
                    <p style="font-size:24px">{{post.name}}</p>
                    <p style="font-size:24px">{{post.company}}</p>
                    <p style="font-size:24px">{{post.designation}}</p>
                </div>
               </div>`
})
export class DetailsComponent implements Post {
    @Input() post: any;
}
