import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { AbstractHeroService } from '../abstract-hero.service';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  countries!: Country[];

  constructor(
    private route: ActivatedRoute,
    private heroService: AbstractHeroService,
    private countryService: CountryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.countryService
      .getCountries()
      .subscribe((countries) => (this.countries = countries));
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  dateChange(date: string) {
    this.hero.date = date ? new Date(date) : null;
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
