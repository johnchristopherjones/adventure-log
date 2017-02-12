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

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
