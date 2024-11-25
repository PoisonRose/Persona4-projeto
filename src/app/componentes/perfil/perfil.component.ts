import { Component, input, OnInit} from '@angular/core';
import { HomeComponent } from '../../paginas/home/home.component';
import { CompendiumService } from '../../servico/compendium.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit{
  constructor(private comp: CompendiumService){ }

  personas:any = '';

  ngOnInit(): void {
    this.comp.getLink("?name=Mothman");
    this.comp.getAllPersonas().subscribe((data: any)=>{
      this.personas = data;
      console.log(data);
    });
  }
}
