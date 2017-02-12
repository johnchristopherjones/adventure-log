import { Component, OnInit } from '@angular/core';

import { Character, DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private characters: Character[];

  constructor(private data: DataService) {
    this.characters = [this.data.randomCharacter()];
  }

  ngOnInit() {}

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
