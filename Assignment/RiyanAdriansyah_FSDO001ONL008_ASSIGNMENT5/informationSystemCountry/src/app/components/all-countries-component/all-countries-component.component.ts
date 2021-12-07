import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-all-countries-component',
  templateUrl: './all-countries-component.component.html',
  styleUrls: ['./all-countries-component.component.css']
})
export class AllCountriesComponentComponent implements OnInit {

  @Input() country:Country[]=[]
  @Output() itemEvent = new EventEmitter<string>();
  countries:Country[]=[]
  constructor() { }

  ngOnInit(): void {
    this.countries = this.getCountries(this.country);
  }

  onCardClick(country: any){
    this.itemEvent.emit(country);
  }

  getCountries(country:Country[]){
    return country.sort((a, b) => b.id - a.id)
    .slice(0, 3)
  }

}
