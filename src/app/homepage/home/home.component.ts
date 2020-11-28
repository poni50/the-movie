import { MoviesService } from './../../shared/services/movies.service';
import { Component, OnInit } from '@angular/core';
import Movie from '../../shared/interfaces/Movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  subscriptions: Subscription[];
  constructor(private moviesService: MoviesService) {
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }
}
