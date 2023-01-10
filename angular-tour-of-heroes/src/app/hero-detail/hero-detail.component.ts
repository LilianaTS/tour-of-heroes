import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

import { Hero } from '../hero';
import { AbstractHeroService } from '../abstract-hero.service';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { CountryFlagPipe } from '../country-flag.pipe';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  countries!: Country[];
  heroForm = new FormGroup({
    id: new FormControl<number | undefined>(undefined),
    name: new FormControl<string>(''),
    countryId: new FormControl<number>(-1),
    date: new FormControl<Date | undefined>(undefined),
    peopleSaved: new FormControl<number>(0),
  });

  heroCountry: Country | undefined;

  private picture: string | undefined | null;
  readOnly = true;

  constructor(
    private route: ActivatedRoute,
    private heroService: AbstractHeroService,
    private countryService: CountryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((countries) => {
      this.countries = countries;
      this.getHero();
    });
  }

  getPictureBase64(pictureBase64: string): void {
    this.picture = pictureBase64;
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id).subscribe((hero) => {
      this.hero = hero;
      this.heroForm.patchValue({
        name: hero.name,
        date: hero.date,
        peopleSaved: hero.peopleSaved,
        countryId: hero.countryId,
      });
      this.picture = this.hero.picture;
      this.heroCountry = this.countries.find(
        (country) => country.id == this.hero.countryId
      );
    });
  }

  goBack(): void {
    this.location.back();
  }

  toggleReadOnly() {
    if (!this.readOnly) {
      this.save();
    }
    this.readOnly = !this.readOnly;
  }

  save(): void {
    this.hero.name = this.heroForm.get('name')?.value || '';
    this.hero.date = this.heroForm.get('date')?.value || null;
    this.hero.peopleSaved = this.heroForm.get('peopleSaved')?.value || 0;
    this.hero.countryId = this.heroForm.get('countryId')?.value || -1;
    this.hero.picture = this.picture || '';
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
