import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/cities/cities.json';
import { WeatherService } from '../services/weather.service';
import * as dataC from '../../assets/countries/countries.json';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements 
OnInit {
  cities:any=Object.values(data);
  weather:any=undefined;
  countries:any=(dataC);
  country:any=undefined;
  Math=Math;
  celsius:any=undefined;
  kelvin:any=undefined;
  allCard:any=[];



  constructor(private weatherService:WeatherService) { 

  }


  ngOnInit(): void { 

    
  }

  getWeather(cityName:string){
    this.weatherService.getWeather(cityName)
    .subscribe(res=>{
      console.log(res);
      this.weather=res;
      this.getCountry(this.weather?.sys?.country)
      this.allCard.push(this.weather)
      console.log(this.allCard)
    },
      err=>console.log(err)
    )
  }
  submitCity(cityName:HTMLInputElement){

   this.getWeather(cityName.value)
    cityName.value="";
    cityName.focus();
    return false;
  }
  submitDropdown(cityName:string){

    this.getWeather(cityName);
    
    
    return false;
  }

  getCountry(country:string){
    Object.keys(this.countries).forEach(key=>{
        if(key==country){
          this.country= this.countries[key];
        }
    })
  }
  onUpdate(celsius:any=undefined,fahrenheit:any=undefined,kelvin:any=undefined){
    console.log(celsius,fahrenheit,kelvin)
  }

  toCelsius(){


  }
  toKelvin(){

  }

}




