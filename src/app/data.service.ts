import { Injectable } from '@angular/core';

export interface Character {
  abilities: number[];
  alignment: string;
  background: string;
  class: string;
  name: string;
  race: string;
  sex: string;
}

@Injectable()
export class DataService {
  public alignments = [
    'Lawful Good', 'Lawful Neutral', 'Lawful Evil',
    'Neutral Good', 'Neutral Neutral', 'Neutral Evil',
    'Chaotic Good', 'Chaotic Neutral', 'Chaotic Evil',
  ];
  private _backgrounds = [
    {name: 'Acolyte', source: 'ph', page: undefined},
    {name: 'Charlatan', source: 'ph', page: undefined},
    {name: 'Criminal', source: 'ph', page: undefined},
    {name: 'Entertainer', source: 'ph', page: undefined},
    {name: 'Folk Hero', source: 'ph', page: undefined},
    {name: 'Guild Artisan', source: 'ph', page: undefined},
    {name: 'Hermit', source: 'ph', page: undefined},
    {name: 'Noble', source: 'ph', page: undefined},
    {name: 'Outlander', source: 'ph', page: undefined},
    {name: 'Sage', source: 'ph', page: undefined},
    {name: 'Sailor', source: 'ph', page: undefined},
    {name: 'Soldier', source: 'ph', page: undefined},
    {name: 'Urchin', source: 'ph', page: undefined},
    {name: 'City Watch', source: 'sc', page: undefined},
    {name: 'Clan Crafter', source: 'sc', page: undefined},
    {name: 'Cloistered Scholar', source: 'sc', page: undefined},
    {name: 'Courtier', source: 'sc', page: undefined},
    {name: 'Faction Agent', source: 'sc', page: undefined},
    {name: 'Far Traveler', source: 'sc', page: undefined},
    {name: 'Inheritor', source: 'sc', page: undefined},
    {name: 'Knight of the Order', source: 'sc', page: undefined},
    {name: 'Mercenary Veteran', source: 'sc', page: undefined},
    {name: 'Urban Bounty Hunter', source: 'sc', page: undefined},
    {name: 'Uthgardt Tribe Member', source: 'sc', page: undefined},
    {name: 'Waterdhavian Noble', source: 'sc', page: undefined},
  ];
  public classes = [
    'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin',
    'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard',
  ];
  public sexes = ['Male', 'Female'];
  public _races = [
    {name: 'Dwarf', source: 'ph', page: undefined},
    {name: 'Elf', source: 'ph', page: undefined},
    {name: 'Halfling', source: 'ph', page: undefined},
    {name: 'Human', source: 'ph', page: undefined},
    {name: 'Dragonborn', source: 'ph', page: undefined},
    {name: 'Gnome', source: 'ph', page: undefined},
    {name: 'Half-Elf', source: 'ph', page: undefined},
    {name: 'Half-Orc', source: 'ph', page: undefined},
    {name: 'Tiefling', source: 'ph', page: undefined},
    {name: 'Aasimar', source: 'sc', page: undefined},
    {name: 'Firbolg', source: 'sc', page: undefined},
    {name: 'Goliath', source: 'sc', page: undefined},
    {name: 'Kenku', source: 'sc', page: undefined},
    {name: 'Lizardfolk', source: 'sc', page: undefined},
    {name: 'Tabaxi', source: 'sc', page: undefined},
    {name: 'Triton', source: 'sc', page: undefined},
  ];
  public dice = [2, 4, 6, 8, 10, 12, 20, 100];

  private bookFilter = {
    'ph': true,
    'sc': true,
    'vg': true,
  }

  constructor() { }

  public setBookFilter(books) {
    this.bookFilter = Object.assign(this.bookFilter, books);
  }

  private roll(dice: number, faces: number): number {
    if (dice < 1) {
      return 0;
    } else if (dice === 1) {
      return Math.floor(Math.random() * faces);
    } else {
      return this.roll(1, faces) + this.roll(dice - 1, faces);
    }
  }

  public random(list) {
    return list[this.roll(1, list.length)];
  }

  private shuffle(array) {
    var i = 0
      , j = 0
      , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  public newCharacter() {
    return {
      alignment: "",
      background: "",
      class: "",
      name: "",
      race: "",
      sex: "",
      abilities: [10, 10, 10, 10, 10, 10],
    }
  }

  get backgrounds() {
    return this._backgrounds.filter(b => this.bookFilter[b.source]);
  }

  get races() {
    return this._races.filter(r => this.bookFilter[r.source]);
  }

  public randomCharacter() {
    let abilities = [15, 14, 13, 12, 10, 8];
    this.shuffle(abilities);

    return Object.assign(this.newCharacter(), {
      abilities,
      alignment: this.random(this.alignments),
      background: this.random(this.backgrounds),
      class: this.random(this.classes),
      name: "",
      race: this.random(this.races),
      sex: this.random(this.sexes),
    })
  }
}
