import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PersonaComponent } from './paginas/persona/persona.component';
import { SkillListComponent } from './paginas/skill-list/skill-list.component';
import { PesquisaComponent } from './componentes/pesquisa/pesquisa.component';
import { BarraSkillComponent } from './componentes/barra-skill/barra-skill.component';
import { PropriedadesSkillsComponent } from './componentes/propriedades-skills/propriedades-skills.component';
import { DetalhesPersonaComponent } from './componentes/detalhes-persona/detalhes-persona.component';
import { HeaderComponent } from './componentes/header/header.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from './diretivas/hover.directive';
import { HighlightDirective } from './diretivas/highlight.directive';
import { ToArrayPipe } from './pipes/to-array.pipe';
import { ResistsPipe } from './pipes/resists.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilComponent,
    PersonaComponent,
    SkillListComponent,
    PesquisaComponent,
    BarraSkillComponent,
    PropriedadesSkillsComponent,
    DetalhesPersonaComponent,
    HeaderComponent,
    HoverDirective,
    HighlightDirective,
    ToArrayPipe,
    ResistsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
