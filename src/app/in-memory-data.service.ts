import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Strange', points: 18 },
  { id: 12, name: 'Iron Man', points: 20},
  { id: 13, name: 'Mr Fantastic', points: 19},
  { id: 14, name: 'Scarlet Witch', points: 21 },
  { id: 15, name: 'Magneto', points: 15 },
  { id: 16, name: 'Wolverine', points: 18 },
  { id: 17, name: 'Captain America', points: 17 },
  { id: 18, name: 'Shang Shi', points: 16 },
  { id: 19, name: 'Hulk', points: 20 },
  { id: 20, name: 'Black Widow', points: 16 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}