import * as fromCharacter from './character.reducer';
import { selectCharacterState } from './character.selectors';

describe('Character Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCharacterState({
      [fromCharacter.characterFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
