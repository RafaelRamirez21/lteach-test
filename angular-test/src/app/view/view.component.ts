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
  //Variables
  cities:any=Object.values(data);
  weather:any=undefined;
  countries:any=(dataC);
  country:any=undefined;
  Math=Math;
  temp:any=undefined;
  tempbase:any=undefined;
  allCard:any=[];
  typeTemp:any=undefined;
  toggle:boolean=true;
  celsius:any=undefined;
  tempfh:any=undefined;



  constructor(private weatherService:WeatherService) { 

  }


  ngOnInit(): void { 
     
  }
  //Methods
  getWeather(cityName:string){
    this.weatherService.getWeather(cityName)
    .subscribe(res=>{
      console.log(res);
      this.weather=res;
      this.getCountry(this.weather?.sys?.country)
      this.allCard.push(this.weather)
      this.tempbase=this.weather?.main?.temp;
      console.log(this.allCard)
    },
      err=>console.log(err)
    )
  }
  submitCity(cityName:HTMLInputElement){

   this.getWeather(cityName.value)
    cityName.value="";
    cityName.focus();
   ;
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

  onTemp($event:any,id:any){
    $event.preventDefault()
    this.typeTemp= $event?.target?.value;
    this.tempfh=this.tempbase;
    if (this.typeTemp=='celsius'){
      this.toCelsius(this.tempfh);
    }else if(this.typeTemp=='kelvin'){
      this.toKelvin(this.tempfh);
    }else if(this.typeTemp=='fahrenheit'){
      this.temp=this.tempfh;
    }
  }

  onUpdate($event:any,id:any){
    $event.preventDefault()
   console.log(id)
   this.allCard.map((card:any)=>{
     if (card.id===id) {
       this.tempbase=card.main.temp;
        card.main.temp=this.temp;
        
     }
   })
  
  }

  toCelsius(tempf:any){
    this.temp=(tempf-32)*5/9;
    
  }
  toKelvin(tempf:any){
      this.temp=(tempf+459.67)*5/9;
  }
  onDelete(id:any){
    console.log(id)
    console.log(this.allCard)
    this.allCard=this.allCard.filter((card:any)=>card.id!==id);
    console.log(this.allCard)
    this.ngOnInit();
  }

}




