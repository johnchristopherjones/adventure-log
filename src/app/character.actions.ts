import { createAction, props } from '@ngrx/store';
import { Character } from './characters/character.model';

export const loadCharacters = createAction(
  '[Character] Load Characters'
);

export const createNewCharacter = createAction(
  '[Character] New Character',
  props<{ character: Character }>()
);




