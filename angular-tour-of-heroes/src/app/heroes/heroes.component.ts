import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  // components CSS element selector
  selector: 'app-heroes',
  // location of components template file
  templateUrl: './heroes.component.html',
  // location of components private CSS styles
  styleUrls: ['./heroes.component.css']
})


// export allows component class to be imported somewhere else
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  // ngOnInit is a lifecycle hook-- good place for initialization logic
  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero)
  }

}
