import { Component } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent {
  movies: any[] | null = null;

  onSearchResults(results: any[]) {
    this.movies = results;
  }
}
