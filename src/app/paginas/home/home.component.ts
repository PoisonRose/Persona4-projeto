import { Component, OnInit } from '@angular/core';
import { CompendiumService } from '../../servico/compendium.service';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css', 
})
export class HomeComponent implements OnInit{
  constructor(private comp: CompendiumService){};

  personas:any = '';

  ngOnInit(): void {

      this.comp.getLink('');
      this.comp.getAllPersonas().subscribe((data: any)=>{
        this.personas = data;
      });
  }

  searchPersona(input:string){
    this.comp.getLink(`?name=${input.toLowerCase()}`);
    console.log(input);
    this.getPersona();
  }

  getPersona(){
    this.comp.getAllPersonas().subscribe((data: any)=>{
      this.personas = data;
      console.log(data);
    });
  }
}
