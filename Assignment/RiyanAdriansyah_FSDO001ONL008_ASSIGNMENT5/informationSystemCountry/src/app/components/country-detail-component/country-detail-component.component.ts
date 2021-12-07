import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-detail-component',
  templateUrl: './country-detail-component.component.html',
  styleUrls: ['./country-detail-component.component.css']
})
export class CountryDetailComponentComponent implements OnInit {

  @Input() country:any;
  @Output() backEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.backEvent.emit();
  }

}
