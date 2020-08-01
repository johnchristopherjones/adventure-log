import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as CharacterActions from './character.actions';


@Injectable()
export class CharacterEffects {


  loadCharacters$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CharacterActions.loadCharacters),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });


  constructor(private actions$: Actions) {}

}
