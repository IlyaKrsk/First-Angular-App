import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieInJSON } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class TopFilmsService {

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get('assets/movies.json')
  }

  parseResponse(res: any) {
    const {data} = res;
    const {movies} = data;
    return movies.map((item: MovieInJSON, index:number) => {
      return {
        title: item.name,
        trailer: item.link,
        id: index
      }
    })
  }
}
