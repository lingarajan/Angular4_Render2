import { Component, Renderer2, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-dynamic-element',
    templateUrl: './dynamic-element.html',
})

export class DynamicElementsComponent implements OnInit {
    @ViewChild('createButton')
    private createButton: ElementRef;
    constructor(private render: Renderer2, private el: ElementRef) {
        console.log(this.el.nativeElement);
    }
    ngOnInit() {
        console.log(this.createButton.nativeElement);
        const button = this.render.createElement('button');
        const text = this.render.createText('listen');
        this.render.appendChild(button, text);
        this.render.appendChild(this.createButton.nativeElement, button);
        this.render.setAttribute(button, 'type', 'text');
        this.render.setProperty(button, 'id', 1);
        this.render.listen(button, 'click', () =>
     alert('hai')
     );
    }
}
