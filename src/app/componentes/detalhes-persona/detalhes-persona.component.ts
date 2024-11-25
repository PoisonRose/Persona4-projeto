import { Component } from '@angular/core';
import { CompendiumService } from '../../servico/compendium.service';

@Component({
  selector: 'app-detalhes-persona',
  templateUrl: './detalhes-persona.component.html',
  styleUrl: './detalhes-persona.component.css'
})
export class DetalhesPersonaComponent {
  constructor(private comp:CompendiumService){}

  personas:any = '';
  
  ngOnInit(): void {
      this.comp.getAllPersonas().subscribe((data: any)=>{
          console.log(data);
          this.personas = data;
      });
  }

}
