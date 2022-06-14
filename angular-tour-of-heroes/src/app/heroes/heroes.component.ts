import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

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
  hero = 'Windstorm';
  constructor() { }

  // ngOnInit is a lifecycle hook-- good place for initialization logic
  ngOnInit(): void {
  }

}
