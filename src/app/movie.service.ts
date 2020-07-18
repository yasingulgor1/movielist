import { Injectable } from '@angular/core';
import { MovieList } from './movieList';
import { MovieDataset } from './movieDataset';
import { of, Observable } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private loggingService : LoggingService) { }


  get list(): Observable<MovieDataset[]> {
    return of(MovieList);
  }

  getlistById(id: number): Observable<MovieDataset> {
    return of(MovieList.find(m => m.id === id));
  }

}
