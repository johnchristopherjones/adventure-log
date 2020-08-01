import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as characterSelectors from 'src/app/character.selectors';
import { Character } from '../character.model';
import { uuidv4 } from 'src/app/core/functions/uuidv4.function';
import { createNewCharacter } from 'src/app/character.actions';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  allCharacters$ = this.store.pipe(select(characterSelectors.selectAll));

  constructor(private store: Store) { }

  createNewCharacter(options?: Partial<Character>) {
    const character: Character = {
      id: uuidv4(),
      alignment: 'chaotic good',
      attacks: [],
      background: 'Waterdhavian Noble',
      class: 'Wizard',
      features: '',
      inventory: [],
      level: 7,
      modifiers: [],
      name: 'Alif Silvermaste',
      skills: [],
      stats: [],
      trackers: [],
      speeds: [],
      ...options ?? {}
    };
    this.store.dispatch(createNewCharacter({ character }));
  }
}
