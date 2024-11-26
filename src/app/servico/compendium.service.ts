import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompendiumService {
  getLink(link:string){
    return this.apiLink = `http://localhost:3000/personas${link}`
  }

  constructor(private http: HttpClient) { }
  apiLink:string = this.getLink(``);
  getAllPersonas(){
    return this.http.get(this.apiLink);
  }
}
