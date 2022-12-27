// import { Injectable } from '@angular/core';
// import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Observable, of } from 'rxjs';
// import { AbstractHeroService } from './abstract-hero.service';
// import { Hero } from './hero';
// import { Country } from './country';

// @Injectable({
//   providedIn: 'root',
// })
// export class InMemoryDataService
//   extends AbstractHeroService
//   implements InMemoryDbService
// {
//   searchHeroDate(date: Date): Observable<Hero[]> {
//     throw new Error('Method not implemented.');
//   }
//   private countries: Country[] = [
//     { id: 1, name: 'Portugal' },
//     { id: 2, name: 'Spain' },
//     { id: 3, name: 'Italy' },
//     { id: 4, name: 'France' },
//     { id: 5, name: 'Germany' },
//     { id: 6, name: 'The Netherlands' },
//     { id: 7, name: 'Luxembourg' },
//     { id: 8, name: 'Belgium' },
//   ];

//   private heroes: Hero[] = [
//     {
//       id: 12,
//       name: 'Dr. Nice',
//       countryId: 1,
//       heroStartDate: '2020/12/12',
//       peopleSaved: 40,
//     },
//     {
//       id: 13,
//       name: 'Bombasto',
//       countryId: 5,
//       heroStartDate: '1970/01/30',
//       peopleSaved: 15,
//     },
//     {
//       id: 14,
//       name: 'Celeritas',
//       countryId: 8,
//       heroStartDate: '2019/06/18',
//       peopleSaved: 65,
//     },
//     {
//       id: 15,
//       name: 'Magneta',
//       countryId: 3,
//       heroStartDate: '1997/07/26',
//       peopleSaved: 501,
//     },
//     {
//       id: 16,
//       name: 'RubberMan',
//       countryId: 1,
//       heroStartDate: '1997/08/19',
//       peopleSaved: 450,
//     },
//     {
//       id: 17,
//       name: 'Dynama',
//       countryId: 4,
//       heroStartDate: '1997/05/08',
//       peopleSaved: 103,
//     },
//     {
//       id: 18,
//       name: 'Dr. IQ',
//       countryId: 7,
//       heroStartDate: '1997/05/06',
//       peopleSaved: 0,
//     },
//     {
//       id: 19,
//       name: 'Magma',
//       countryId: 6,
//       heroStartDate: '2008/01/08',
//       peopleSaved: 556,
//     },
//     {
//       id: 20,
//       name: 'Tornado',
//       countryId: 6,
//       heroStartDate: '1993/08/01',
//       peopleSaved: 10000001,
//     },
//   ];

//   createDb() {
//     return { heroes: this.heroes };
//   }

//   getHeroes(): Observable<Hero[]> {
//     return of(this.heroes);
//   }
//   getHero(id: number): Observable<Hero> {
//     return of(this.heroes.find((hero) => hero.id === id)!);
//   }
//   searchHeroes(term: string): Observable<Hero[]> {
//     return of(
//       this.heroes.filter(
//         (hero) => hero.name.toLowerCase().includes(term.toLowerCase())!
//       )
//     );
//   }
//   addHero(hero: Hero): Observable<Hero> {
//     const newHero = { ...hero, id: this.genId(this.heroes) };
//     this.heroes.push(newHero);
//     // this.heroes = [...this.heroes, newHero];
//     return of(newHero);
//   }
//   deleteHero(id: number): Observable<Hero> {
//     const index = this.heroes.findIndex((hero) => hero.id === id);
//     const deletedHero = this.heroes.splice(index, 1);
//     return of(deletedHero[0]);
//   }
//   updateHero(hero: Hero): Observable<any> {
//     const index = this.heroes.findIndex((h) => h.id === hero.id);
//     this.heroes.splice(index, 1, hero);
//     return of(hero);
//   }

//   // Overrides the genId method to ensure that a hero always has an id.
//   // If the heroes array is empty,
//   // the method below returns the initial number (11).
//   // if the heroes array is not empty, the method below returns the highest
//   // hero id + 1.
//   genId(heroes: Hero[]): number {
//     return heroes.length > 0
//       ? Math.max(...heroes.map((hero) => hero.id)) + 1
//       : 11;
//   }
// }
