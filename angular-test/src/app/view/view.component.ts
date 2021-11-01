import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/cities/cities.json';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements 
OnInit {
  cities:any=Object.values(data);
  

  // objectKeys:any=Object.keys;
  // objectValue:any=Object.values;

  constructor(private weatherService:WeatherService) { 

  }


  ngOnInit(): void {    
  }

  getWeather(cityName:string){
    this.weatherService.getWeather(cityName)
    .subscribe(
      res=>console.log(res),
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

}




