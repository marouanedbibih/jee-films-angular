import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchmovieService } from '../services/searchmovie.service';
import { FormValidators } from './form.validators';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css'],
})
export class SearchformComponent implements OnInit {
  @Output() resultsEmitted = new EventEmitter<any[]>(); // Emitting search results
  searchForm: FormGroup;
  title: FormControl;
  year: FormControl;
  errors: string | null = null;

  constructor(private fb: FormBuilder, private service: SearchmovieService) {
    let titlePattern = '[a-zA-Z0-9,. ]+';
    let yearPattern = '[0-9]{4}';

    this.title = fb.control('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.pattern(titlePattern),
    ]);

    this.year = fb.control('', [
      Validators.pattern(yearPattern),
      FormValidators.integerBetween(1900, 2017),
    ]);
    this.searchForm = this.fb.group({
      title: this.title,
      year: this.year,
    });
  }

  ngOnInit() {}

  onSearch() {
    console.log(this.searchForm.value);

    const title = this.title.valid ? this.title.value : null;
    const year = this.year.valid ? this.year.value : null;

    if (title) {
      this.service.searchMovie(title, year).subscribe({
        next: (data: any) => {
          this.errors = null;
          this.resultsEmitted.emit(data.Search); // Emit results
          console.log(data.Search)
        },
        error: (err) => {
          this.errors = 'An error occurred while searching.';
          console.error('Error:', err);
        },
      });
    }
  }
}
