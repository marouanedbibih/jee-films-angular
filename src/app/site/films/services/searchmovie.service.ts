import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../../config/env';

@Injectable({
  providedIn: 'root'
})
export class SearchmovieService {

  constructor(private http: HttpClient) { }

  searchMovie(title: string, year: string) {
    return this.http.get(`http://www.omdbapi.com/?apikey=${env.API_KEY}&s=${title}&y=${year}`);
  }
}
