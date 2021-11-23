import { utf8Encode } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { TopFilmsModule } from '../top-films.module';
import { TopFilmsService } from '../top-films.service';

@Component({
  selector: 'app-top-films',
  templateUrl: './top-films.component.html',
  styleUrls: ['./top-films.component.scss']
})
export class TopFilmsComponent implements OnInit {
  movieList!: Movie [];
  constructor(private topFilmsService: TopFilmsService) { }

  ngOnInit(): void {
    this.topFilmsService.getFilms().subscribe((res:Object) => {
      this.movieList = this.topFilmsService.parseResponse(res);


      console.log('movieList', this.movieList)
    })


  }

}
