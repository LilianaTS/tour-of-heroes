import { Component, OnInit } from '@angular/core';
import { AbstractHeroService } from '../abstract-hero.service';
import { Hero } from '../hero';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: AbstractHeroService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(0, 5)));

    // this.heroService.getHero(1).subscribe();
    // .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
