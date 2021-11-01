import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URI:string='';
  API_KEY:string=environment.API_KEY;
  constructor(private httpClient:HttpClient) {
    this.URI=`https://api.openweathermap.org/data/2.5/weather?&appid=${this.API_KEY}&q=`;

   }

   getWeather(city:string){
    return this.httpClient.get(`${this.URI}${city}`)
   }
}
