import { Component, Renderer2, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'app-append',
    templateUrl: './append-demo.html',
})

export class AppendComponent {
    @ViewChild('linga')
    @ViewChild('lingamayan')
    private linga: ElementRef;
    private lingamayan: ElementRef;
    private rendertext: any;
    div = this.render.createElement('li');
    texts = this.render.createText('lingara is a Svs stack Developer');

    constructor(private render: Renderer2, private elRef: ElementRef) {
        console.log(this.render);
        console.log(this.div);
        this.render.appendChild(this.div, this.texts);
        this.render.appendChild(this.elRef.nativeElement, this.div);
        console.log(this.elRef);
        parent = this.render.parentNode(this.elRef.nativeElement);
        this.render.setStyle(parent, 'color', 'red');
    }

    appendClick() {
        // append-child
        const li = this.render.createElement('li');
        const spantext = this.render.createText('linga is a Svs Fullstack Developer');
        this.render.setAttribute(this.linga.nativeElement, 'value', 'lingarajan');
        this.render.setProperty(this.linga.nativeElement, 'id', 1);
        this.render.addClass(this.linga.nativeElement, 'superclass');
        this.render.setStyle(this.linga.nativeElement, 'background-color', 'red');
        const commnets = this.render.createComment('good----------good');
        this.render.appendChild(this.linga.nativeElement, commnets);
        this.render.appendChild(li, spantext);
        this.render.appendChild(this.linga.nativeElement, li);

    }
    // insert-before
    insertBefore() {
        const li = this.render.createElement('span');
        const text = this.render.createText('hai super linga');
        this.render.appendChild(li, text);
        const parent = this.elRef.nativeElement.parentNode;
        console.log(parent);
        const refchild = this.elRef.nativeElement;
        console.log(refchild);
        this.render.insertBefore(parent, li, refchild);
    }
    removechild() {

        this.render.removeChild(this.elRef.nativeElement, this.div);
        this.render.removeAttribute(this.linga.nativeElement, 'value');
        this.render.removeClass(this.linga.nativeElement, 'superclass');
        this.render.removeStyle(this.linga.nativeElement, 'background-color');
    }
    selectElement() {
        const element = this.render.selectRootElement('.myclass');
        const ele = this.render.createText('lingaHappy');
        this.render.appendChild(element, ele);
    }




}