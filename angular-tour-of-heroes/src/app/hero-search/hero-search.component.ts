import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';

import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';
import { AbstractHeroService } from '../abstract-hero.service';
import { Country } from '../country';
import { CountryService } from '../country.service';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  searchTerm = new BehaviorSubject<string>('');
  searchCountry = new BehaviorSubject<number>(-1);
  searchDate = new BehaviorSubject<Date | undefined>(undefined);

  countries!: Country[];
  constructor(
    private heroService: AbstractHeroService,
    private countryService: CountryService
  ) {}

  // Push a search term into the observable stream.
  // searchHeroName(term: string): void {
  //   this.searchTerms.next(term);
  // }

  // searchHeroDate(date: string) {
  //   this.searchTerms.next(date);
  // }

  // searchHeroCountry(countryId: number) {
  //   this.countryId = countryId;
  // }

  ngOnInit(): void {
    this.countryService
      .getCountries()
      .subscribe((countries) => (this.countries = countries));

    this.heroes$ = combineLatest([
      this.searchCountry.pipe(distinctUntilChanged()),
      this.searchDate.pipe(distinctUntilChanged()),
      this.searchTerm.pipe(distinctUntilChanged()),
    ]).pipe(
      // wait 500ms after each keystroke before considering the term
      debounceTime(500),
      tap((searchTerm) => console.log(searchTerm)),
      // switch to new search observable each time the term changes
      switchMap(([searchCountry, searchDate, searchTerm]) =>
        this.heroService.searchHeroes(
          searchTerm,
          +searchCountry,
          searchDate ? new Date(searchDate) : undefined
        )
      )
    );
  }
}
