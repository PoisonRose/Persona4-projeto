import { Component, OnInit } from '@angular/core';
import { CompendiumService } from '../../servico/compendium.service';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from '../../servico/favorites.service';

@Component({
  selector: 'app-detalhes-persona',
  templateUrl: './detalhes-persona.component.html',
  styleUrl: './detalhes-persona.component.css'
})
export class DetalhesPersonaComponent implements OnInit{
  constructor(private comp:CompendiumService, private route: ActivatedRoute, private fav: FavoritesService){}

  personas:any = '';
  
  ngOnInit(): void {
        this.route.queryParamMap.subscribe((params) => {
          this.comp.getLink(`/${params.get('id')}`);
          this.comp.getAllPersonas().subscribe((data: any)=>{
            console.log(data);
            this.personas = data;
        });
      });
  }

  addFavoritos(){
    this.fav.setFavorite(this.personas);
    console.log(this.personas);
  }

  remFavoritos(){
    this.fav.setFavorite(this.personas);
    console.log(this.personas);
  }

}
