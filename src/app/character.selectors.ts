import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCharacter from './character.reducer';

export const selectCharacterState = createFeatureSelector<fromCharacter.State>(
  fromCharacter.characterFeatureKey
);

export const { selectAll, selectEntities, selectIds, selectTotal } = fromCharacter.adapter.getSelectors(selectCharacterState);

export const selectCharacter = () => createSelector(selectEntities, (entities, props: { id: string }) => entities[props.id]);
