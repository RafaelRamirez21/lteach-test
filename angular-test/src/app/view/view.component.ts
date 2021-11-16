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
  //subcription
  getWeather(cityName:string){
    this.weatherService.getWeather(cityName)
    .subscribe(res=>{
      console.log(res);
      this.weather=res;
      
      this.weather["main"]["tempbase"]=this.weather?.main?.temp;  
      this.getCountry(this.weather?.sys?.country);
      console.log(this.country);
      this.weather["sys"]["country"]=this.country;
     
      this.allCard.push(this.weather);
      
      this.tempbase=this.weather?.main?.temp;
      console.log(this.allCard);
      
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
    const card=this.allCard.filter((card: { id: any; })=>card.id===id);
    const tmp=card[0]?.main?.tempbase;
    const tempfh=tmp;
    console.log(tmp)
    if (this.typeTemp=='celsius'){
      this.toCelsius(tempfh);
    }else if(this.typeTemp=='kelvin'){
      this.toKelvin(tempfh);
    }else if(this.typeTemp=='fahrenheit'){
      this.temp=tempfh
      
    }
  }

  onUpdate($event:any,id:any){
    $event.preventDefault()

   this.allCard.map((card:any)=>{
     if (card.id===id) {
       this.tempbase=card.main.tempbase;
       card["main"]["tempbase"]=this.tempbase
       console.log(card)
       card.main.temp=this.temp;
        
        
     }
   })
  
  }

  toCelsius(tempf:any){
    this.temp=(tempf-32)*5/9;
    console.log(this.temp,tempf)
    
  }
  toFarenheit(tempf:any){
    if (this.temp===tempf){
      this.temp=tempf;
    }

    
  }
  toKelvin(tempf:any){
 
      this.temp=(tempf+459.67)*5/9;
      
    
    
      
  }
  onDelete(id:any){
 
    console.log(this.allCard)
    this.allCard=this.allCard.filter((card:any)=>card.id!==id);
    console.log(this.allCard)
    this.ngOnInit();
  }

}




