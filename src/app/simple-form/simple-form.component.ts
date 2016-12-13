import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
<input 
  #myInput 
  type="text" 
  [(ngModel)]="message"
  [ngClass]="{mousedown: isMouseDown}"
  (mousedown)="isMouseDown = true"
  (mouseup)="isMouseDown = false"
  (mouseleave)="isMouseDown = false"
   />
<button (click)="update.emit({text:message})">Click me !</button>`,
  styleUrls: ['./simple-form.scss']
})
export class SimpleFormComponent implements OnInit {

  isMouseDown;

  @Input() message;

  @Output() update = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

}
