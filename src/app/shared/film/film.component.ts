import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() film?: Movie;
  @Input() isItSaved?: boolean;
  @Output() unsaveFilmEmitToParent = new EventEmitter();

  



  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    console.log('film', this.isItSaved);
  }

  saveFilm(id:string) {
    this.storageService.saveFilm(id);
  }

  unsaveFilm(id:string) {
    this.unsaveFilmEmitToParent.emit(id)
    this.storageService.unsaveFilm(id);
    
  }

}
