import { Component, OnInit, Input } from '@angular/core';
import { MovieDataset } from '../movieDataset';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'moviedetail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  id : number;
  movie : MovieDataset;

  constructor(private movieServie : MovieService,private route : ActivatedRoute) { }

  
  ngOnInit(): void {
    this.fillMovie();
  }

  fillMovie():void{
   this.id =  +this.route.snapshot.paramMap.get('id');
   this.movieServie.getlistById(this.id).subscribe(movie => this.movie = movie);
  }

}
