import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  persona: any= '';
  constructor() { }

  setFavorite(data: any){
    return data['favorite'] = true;
  }

  removeFavorite(data: any){
    return data.favorite = false;
  }
}
