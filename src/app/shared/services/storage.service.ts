import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private router: Router) { };

  saveFilm(id:string) {
    const savedFilms = JSON.parse(localStorage.getItem('savedFilms') as string) || [];
    localStorage.setItem('savedFilms', JSON.stringify(savedFilms.concat(id)));
  }

  unsaveFilm(id:string) {

    
    const savedFilms = JSON.parse(localStorage.getItem('savedFilms') as string) || [];
    const res = savedFilms.filter((itemID:any) => itemID != id);
     
     
     localStorage.setItem('savedFilms', JSON.stringify(res));
     return true;
     //this.router.navigate(['saved']);
  }

    getSavedFilms() {
      return JSON.parse(localStorage.getItem('savedFilms') as string) || [];
    }


}
