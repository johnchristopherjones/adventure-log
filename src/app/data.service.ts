import { Injectable } from '@angular/core';

export interface Character {
  alignment: string;
  background: string;
  class: string;
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
  public backgrounds = [
    {name: 'Acolyte', source: 'PH', page: undefined},
    {name: 'Charlatan', source: 'PH', page: undefined},
    {name: 'Criminal', source: 'PH', page: undefined},
    {name: 'Entertainer', source: 'PH', page: undefined},
    {name: 'Folk Hero', source: 'PH', page: undefined},
    {name: 'Guild Artisan', source: 'PH', page: undefined},
    {name: 'Hermit', source: 'PH', page: undefined},
    {name: 'Noble', source: 'PH', page: undefined},
    {name: 'Outlander', source: 'PH', page: undefined},
    {name: 'Sage', source: 'PH', page: undefined},
    {name: 'Sailor', source: 'PH', page: undefined},
    {name: 'Soldier', source: 'PH', page: undefined},
    {name: 'Urchin', source: 'PH', page: undefined},
    {name: 'City Watch', source: 'SC', page: undefined},
    {name: 'Clan Crafter', source: 'SC', page: undefined},
    {name: 'Cloistered Scholar', source: 'SC', page: undefined},
    {name: 'Courtier', source: 'SC', page: undefined},
    {name: 'Faction Agent', source: 'SC', page: undefined},
    {name: 'Far Traveler', source: 'SC', page: undefined},
    {name: 'Inheritor', source: 'SC', page: undefined},
    {name: 'Knight of the Order', source: 'SC', page: undefined},
    {name: 'Mercenary Veteran', source: 'SC', page: undefined},
    {name: 'Urban Bounty Hunter', source: 'SC', page: undefined},
    {name: 'Uthgardt Tribe Member', source: 'SC', page: undefined},
    {name: 'Waterdhavian Noble', source: 'SC', page: undefined},
  ]
  public classes = [
    'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin',
    'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard',
  ];
  public sexes = ['Male', 'Female'];
  public races = [
    'Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome',
    'Half-Elf', 'Half-Orc', 'Tiefling', 'Aasimar', 'Firbolg', 'Goliath',
    'Kenku', 'Lizardfolk', 'Tabaxi', 'Triton',
  ];
  public dice = [2, 4, 6, 8, 10, 12, 20, 100];

  constructor() { }

  private roll(dice: number, faces: number): number {
    if (dice < 1) {
      return 0;
    } else if (dice === 1) {
      return Math.floor(Math.random() * faces);
    } else {
      return this.roll(1, faces) + this.roll(dice - 1, faces);
    }
  }

  private random(list) {
    return list[this.roll(1, list.length)];
  }

  public randomCharacter() {
    return {
      alignment: this.random(this.alignments),
      background: this.random(this.backgrounds),
      class: this.random(this.classes),
      race: this.random(this.races),
      sex: this.random(this.sexes),
    }
  }
}
