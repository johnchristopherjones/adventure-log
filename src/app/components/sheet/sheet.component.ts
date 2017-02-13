import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Character, DataService } from '../../data.service';

@Component({
  selector: 'character-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  @Input() character;
  @Output() change = new EventEmitter();

  constructor(
    private data: DataService
  ) {
  }

  ngOnInit() {
  }

  randomize(key, choices) {
    this.character[key] = this.data.random(choices);
    this.change.emit(Object.assign(
      {}, this.character, {[key]: this.data.random(choices)}
    ));
  }

}
