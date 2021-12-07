import { Component } from '@angular/core';
import { Country } from './models/Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  country: Country[]=[];
  isHome = true;
  isAll = false;
  isDetails = false;
  before = ""
  countryDetail:any

  ngOnInit(): void{
    this.country = [
      { id: 1, name: 'United States', capital: 'Washington, D.C', area: 9525067, population: 325365189, gdp: 18569100, currency: "United States Dollar"},
      { id: 2, name: 'Japan', capital: 'Tokyo', area: 364555, population: 126476461, gdp: 5064872, currency: "Japanese Yen" },
      { id: 3, name: 'Rusia', capital: 'Moscow', area: 532425, population: 145934462, gdp: 9569100, currency: "Russian Ruble" },
      { id: 4, name: 'China', capital: 'Beijing', area: 9388211, population: 1439323776, gdp: 14722730, currency: "Chinese Yuan" },
      { id: 5, name: 'Canada', capital: 'Ottawa', area: 9093510, population: 37742154, gdp: 1643407, currency: "Canadian Dollar" }
    ]
  }

  showFromAll(country: any){
    console.log(country);
    this.countryDetail = country;
    this.isHome = false;
    this.isAll = false;
    this.isDetails = true;
    this.before = "all"
  }

  showFromHome(country:any){
    console.log(country);
    this.countryDetail = country;
    this.isHome = false;
    this.isAll = false;
    this.isDetails = true;
    this.before = "home"
  }

  title = 'informationSystemCountry';

  showAll(){
    this.isHome = false;
    this.isAll = true;
    this.isDetails = false;
    this.before = ""

  }

  showHome(){
    this.isHome = true;
    this.isAll = false;
    this.isDetails = false;
    this.before = ""
  //   this.params.map((v,i) => {
  //     v.isAll = false;
  //     v.isHome = true;
  //     v.isDetail = false;
  //     return v;
  //   })
  }

  backEvent(){
    if(this.before == "all"){
      this.isAll = true;
      this.isHome = false;
      this.isDetails = false;
      this.before = ""
    }else if(this.before == "home"){
      this.isHome = true;
      this.isAll = false;
      this.isDetails = false;
      this.before = ""
    }
  }
}
