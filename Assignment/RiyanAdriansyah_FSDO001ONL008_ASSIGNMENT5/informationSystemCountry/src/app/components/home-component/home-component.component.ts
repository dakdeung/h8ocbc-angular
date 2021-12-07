import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  @Input() country:Country[]=[]
  bigArea:any
  bigPopulated:any
  @Output() itemEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    this.bigPopulated = this.getThreeBigPopulated(this.country);
    this.bigArea = this.getThreeBigArea(this.country);
  }

  onCardClick(country: any){
    this.itemEvent.emit(country);
  }

  getThreeBigPopulated(country: Country[]){
    return country.sort((a, b) => b.population - a.population)
    .slice(0, 3)
  }

  getThreeBigArea(country: Country[]){
    return country.sort((a, b) => b.area - a.area)
    .slice(0, 3)
  }

}
