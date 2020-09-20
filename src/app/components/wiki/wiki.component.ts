import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { IAll } from 'src/app/interfaces/all.interface';
import {AllPokemonsService} from 'src/app/services/all-pokemons.service'

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
  
export class WikiComponent implements OnInit {
  Arraya:Array<any> =[]
  Allpp:Array<any> =[]
  AllNewp:Array<any> =[]
  name:string
  url:string 
  id:number
   i:number

  hideme:boolean = true
  hide:boolean = true
  try:boolean   
  water:boolean = false
// 
List1__I :number = 0
List1__II :number = 4

List2__I :number = 50
List2__II  :number  = 53

List3__I  :number  = 110
List3__II :number = 113
 
 
 

count: number = 0;
s:number = 20
  p:Array<any> 
  Clicked:Array<any> =[]
// 
// All Types
Types:Array<any> =[]

  constructor(private allPokemonsService:AllPokemonsService , private http: HttpClient) { }

  ngOnInit(): void {
    this.getP()
     this.getT()
    // this.createPList()
  }
  private getP() {
    // this.allPokemonsService.getAllPokemons
    this.allPokemonsService.getAllPokemons().subscribe(
      data =>{
       
       this.Arraya = data['results'];
       
        console.log('this.Arraya' , this.Arraya)
        // data['results'].forEach(element => {
        //   this.http.get<Array<IAll>>(element.url )
        // })


        this.Arraya.forEach(element =>{
          console.log(element.url)
           this.http.get<Array<IAll>>(element.url).subscribe(
              data =>{ 
                this.Allpp.push(data)
               console.log(data)
               console.log('this all' ,this.Allpp[0])
               
              })


      }, error => {console.log('Oops' , error)}
    )



     
    })
     
  }
 private getT(){
  this.allPokemonsService.getAllTypes().subscribe(
   data =>{
     console.log(data['results'])
    this.Types = data['results'];
   }

  )
 }
 public Clear() {
  this.Allpp =  [];
  this.getP();
 }
 private getCustomT(i:number){
  this.allPokemonsService.getCustomTypes(i).subscribe(
     
    data =>{
      console.log(data['pokemon']) 
      this.Arraya = data['pokemon'];
      
       console.log('this.Arraya' , this.Arraya)
       // data['results'].forEach(element => {
       //   this.http.get<Array<IAll>>(element.url )
       // })

       this.Allpp = []
       this.Arraya.forEach(element =>{
         console.log(element.pokemon.url)
          this.http.get<Array<IAll>>(element.pokemon.url).subscribe(
             data =>{ 
               this.Allpp.push(data)
              console.log(data)
              console.log('this all' ,this.Allpp)
              
             })


     }, error => {console.log('Oops' , error)}
   )



    
   })
 }
 
 

 
  onClickMe(Allpp , i){
    this.Clicked.pop()
    this.Clicked.push(this.Allpp[i])
    console.log(this.Allpp[i])
    console.log(this.Clicked)
  }
  loadPokemons(){
    this.List1__I  += 4
    this.List1__II  += 4
    this.List2__I  += 4
    this.List2__II  += 4
    this.List3__I  += 4
    this.List3__II  += 4
  }
showinfo(){
  this.hideme = true
}
hideinfo(){
  this.hideme = !this.hideme
}

  chooseType(event : any, i: number){
    this.count++
    console.log('!!!!!!!!!!!!!!', event)
    console.log('!!!!!!!!!!', event)
    console.log('!!!!!!!!!!!!', event.srcElement.value)
    this.i = ++event.srcElement.value
    console.log(this.i)
  
    this.getCustomT(this.i)
// if(this.count % 2 != 0) {
 
// this.getCustomT(this.i)
// }
 
// if(this.count % 2 == 0) {
//   let x = document.getElementsByClassName("check");
//   let n: number;
//   for (n = 0; n < x.length; n++) {
//       (<HTMLElement>x[n]).setAttribute("checked", "true");
//       // (<HTMLElement>x[i]).checked = "checked";
//       (< HTMLInputElement > x[n]).checked = false;
//   }
//   this.Allpp = []
//   this.getP()
  
// }
 
  }



 
}