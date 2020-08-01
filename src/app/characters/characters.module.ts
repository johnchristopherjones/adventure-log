import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffects } from '../character.effects';
import { CharacterListPageComponent } from './components/character-list-page/character-list-page.component';
import { CharacterSheetPageComponent } from './components/character-sheet-page/character-sheet-page.component';
import { CharactersTableComponent } from './components/characters-table/characters-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StoreModule } from '@ngrx/store';
import * as characterReducer from '../character.reducer';
import { MatButtonModule } from '@angular/material/button';

export const routes: Routes = [
  {
    path: 'characters',
    component: CharacterListPageComponent
  },
  {
    path: 'characters/:id',
    component: CharacterSheetPageComponent
  }
];


@NgModule({
  declarations: [CharacterListPageComponent, CharacterSheetPageComponent, CharactersTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(characterReducer.characterFeatureKey, characterReducer.reducer),
    EffectsModule.forFeature([CharacterEffects]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
  ]
})
export class CharactersModule { }
