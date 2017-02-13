import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

import { Character, DataService } from './data.service';
import { IconService } from './icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private characters: Character[];
  private books = {
    ph: true,
    sc: true,
    vg: true
  };

  constructor(
    private data: DataService,
    private icon: IconService
  ) {
  }

  ngOnInit() {
    this.characters = [this.data.newCharacter()];
  }

  private changeCharacter(character: Character, index: number) {
    this.characters[index] = Object.assign(this.characters[index], character);
  }

  private insertCharacter(index: number) {
    this.characters = [
      ...this.characters.slice(0, index + 1),
      this.data.randomCharacter(),
      ...this.characters.slice(index + 1, this.characters.length)
    ];
  }
}
