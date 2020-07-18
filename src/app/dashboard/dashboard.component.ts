import { Component, OnInit } from '@angular/core';
import { MovieDataset } from '../movieDataset';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movielist : MovieDataset[] = [];
  movie : MovieDataset;

  constructor(private movieservice : MovieService) { }

  ngOnInit(): void {
    this.fillmovieList();
    this.fillMovie();
  }

  fillmovieList():void{
      this.movieservice.list.subscribe(m => {
        this.movielist = m.slice(0,3);
      })
  }

  fillMovie():void{
    this.movieservice.getlistById(1).subscribe(m => this.movie = m);
  }


}
