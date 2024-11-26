import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillListService {
  getLink(link:string){
    return this.apiLink = `http://localhost:3000/skills${link}`
  }
  constructor(private http: HttpClient) { }
  apiLink:string = this.getLink('');
  getAllSkills(){
    return this.http.get(this.apiLink);
  }
  
}
