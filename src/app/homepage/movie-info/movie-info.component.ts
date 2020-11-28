import { MoviesService } from './../../shared/services/movies.service';
import Movie from '../../shared/interfaces/Movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {
  movie: Movie;

  constructor(
    private routes: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params: Params) => {
      this.movieService.getMovie(params.id).subscribe((data) => {
        this.movie = data;
      });
    });
  }
}
