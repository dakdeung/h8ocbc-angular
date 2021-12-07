import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() message='';
  @Output() itemEvent = new EventEmitter<number>();

  constructor() { }

  onButtonClick(){
    this.itemEvent.emit();
  }

  ngOnInit(): void {
  }

}
