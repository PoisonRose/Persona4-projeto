import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompendiumService } from '../../servico/compendium.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent implements OnInit{
  constructor(private route: ActivatedRoute, private comp: CompendiumService){}
  ngOnInit(): void {
      this.route.queryParamMap.subscribe((paramMap) =>{
        const paramValue = paramMap.get('id');
        this.comp.getLink(`${paramValue}`)
      });
  }
}


