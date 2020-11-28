import Movie from '../interfaces/Movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private URL = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.URL);
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.URL + '/' + id);
  }
}
