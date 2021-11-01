import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URI:string='';
  API_KEY:string='d9d75060deb346d89357f6f9acb6050a';
  constructor(private httpClient:HttpClient) {
    this.URI=`https://api.openweathermap.org/data/2.5/weather?&appid=${this.API_KEY}&q=`;

   }

   getWeather(city:string){
    return this.httpClient.get(`${this.URI}${city}`)
   }
}
