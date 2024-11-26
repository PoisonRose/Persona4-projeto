import { Component, OnInit } from '@angular/core';
import { SkillListService } from '../../servico/skill-list.service';

@Component({
  selector: 'app-propriedades-skills',
  templateUrl: './propriedades-skills.component.html',
  styleUrl: './propriedades-skills.component.css'
})

export class PropriedadesSkillsComponent implements OnInit{
  constructor(private skill: SkillListService){}

  skills: any= "";

  ngOnInit(): void {
      this.skill.getLink('');
      this.skill.getAllSkills().subscribe((data: any)=>{
        this.skills = data;
      });
  }
}
