import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';

import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { AbstractHeroService } from '../abstract-hero.service';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { CountryFlagPipe } from '../country-flag.pipe';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;

  search = new FormGroup({
    id: new FormControl<number | undefined>(undefined),
    name: new FormControl<string>(''),
    countryId: new FormControl<number>(-1),
    date: new FormGroup({
      start: new FormControl<Date | undefined>(undefined),
      end: new FormControl<Date | undefined>(undefined),
    }),
    peopleSaved: new FormControl<number>(0),
  });

  countries!: Country[];
  constructor(
    private heroService: AbstractHeroService,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.countryService
      .getCountries()
      .subscribe((countries) => (this.countries = countries));

    this.heroes$ = this.search.valueChanges.pipe(
      // wait 500ms after each keystroke before considering the term
      debounceTime(500),
      tap((searchTerm) => console.log(searchTerm)),
      // switch to new search observable each time the term changes
      switchMap((hero) =>
        this.heroService.searchHeroes(
          hero.name ?? '',
          +(hero.countryId ?? -1),
          hero.date?.start ? new Date(hero.date.start) : undefined,
          hero.date?.end ? new Date(hero.date.end) : undefined
        )
      )
    );
  }
}
