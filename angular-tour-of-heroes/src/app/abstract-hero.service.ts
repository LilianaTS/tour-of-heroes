import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Hero } from './hero';

@Injectable()
export abstract class AbstractHeroService {
  // private heroesUrl = 'api/heroes'; // URL to web api

  constructor() {}

  /** GET heroes from the server */
  abstract getHeroes(): Observable<Hero[]>;

  //   /** GET hero by id. Return `undefined` when id not found */
  //   abstract getHeroNo404<Data>(id: number): Observable<Hero>;

  /** GET hero by id. Will 404 if id not found */
  abstract getHero(id: number): Observable<Hero>;

  /* GET heroes whose name contains search term */
  abstract searchHeroes(
    term: string,
    countryId: number,
    startDate: Date | undefined,
    endDate: Date | undefined
  ): Observable<Hero[]>;

  /* GET heroes that started saving on selectedDate */
  abstract searchHeroDate(date: Date): Observable<Hero[]>;

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  abstract addHero(hero: Hero): Observable<Hero>;

  /** DELETE: delete the hero from the server */
  abstract deleteHero(id: number): Observable<Hero>;

  /** PUT: update the hero on the server */
  abstract updateHero(hero: Hero): Observable<any>;
}
