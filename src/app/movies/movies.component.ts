import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieDataset } from '../movieDataset'; 
import { LoggingService } from '../logging.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title = "Movie List";
  movielist : MovieDataset[];
  selectedMovie : MovieDataset;

  constructor(private movieservice : MovieService,private loggingService : LoggingService) { }

  ngOnInit(): void {
    this.fillmovielist();
  }

  fillmovielist() : void{
     this.movieservice.list.subscribe(x => this.movielist = x);
  }

}
