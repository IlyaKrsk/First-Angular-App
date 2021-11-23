import { Component, OnInit  } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { StorageService } from 'src/app/shared/services/storage.service';
import { TopFilmsService } from '../../top-films.service';
import { SavedFilmsModule } from '../saved-films.module';

@Component({
  selector: 'app-saved-films',
  templateUrl: './saved-films.component.html',
  styleUrls: ['./saved-films.component.scss']
})
export class SavedFilmsComponent implements OnInit {
  savedList: Movie [] = [];
  constructor(private topFilmsService: TopFilmsService, private storageService: StorageService) { }

  ngOnInit(): void {

    this.topFilmsService.getFilms().subscribe((res:Object) => {
      const savedFilms = this.storageService.getSavedFilms();
      this.savedList = this.topFilmsService.parseResponse(res).filter((item: any) => savedFilms.includes(item.id));



      console.log('savedList', this.savedList)
    })


   
  }

  removeFilm(id: string) {
    console.log('idd', id)

    this.topFilmsService.getFilms().subscribe((res:Object) => {
      const savedFilms = this.storageService.getSavedFilms();
      this.savedList = this.topFilmsService.parseResponse(res).filter((item: any) => savedFilms.includes(item.id));



      console.log('savedList', this.savedList)
    })

  }

  

}
