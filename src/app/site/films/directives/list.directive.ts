import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[moviesList]',
})
export class ListDirective {
  private _list: any[] | null = null;

  @Input()
  set moviesList(value: any[]) {
    console.log('Movies received in directive:', value);
    this._list = value;
  }

  get moviesList(): any[] | null {
    return this._list;
  }
}
