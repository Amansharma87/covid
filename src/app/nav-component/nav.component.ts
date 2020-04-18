import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Form } from '@angular/forms';
@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
 data:any;
 data2:any;
 selected:any;
 s=false;
    constructor(private http:HttpClient){

  }
    ngOnInit(){
        this.http.get('https://corona.lmao.ninja/v2/all')
        .subscribe(
          (response:any)=>{
            console.log(response);
            this.data2=response
            
          },
         );
        this.http.get('https://corona.lmao.ninja/v2/countries')
        .subscribe(
          (response:Array<object>)=>{
            this.data=response;
            console.log(this.data);
            // const data=response.response.data;
            // console.log(data);
            
          },
         );
 }
 find(country:string){
     console.log(country);
     for (let i = 0; i < this.data.length; i++) {
        // console.log(this.data[i]);
         if(this.data[i].country===country){
             this.selected=this.data[i];
             this.s=true;
             break;
             
         }
         
     }
 }
} 