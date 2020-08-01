import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as CharacterActions from './character.actions';
import { Character } from './characters/character.model';

export const characterFeatureKey = 'characters';

export interface State extends EntityState<Character> { }

export const adapter = createEntityAdapter<Character>();

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,

  on(CharacterActions.loadCharacters, state => state),
  on(CharacterActions.createNewCharacter, (state, { character }) => adapter.addOne(character, state)),

);

