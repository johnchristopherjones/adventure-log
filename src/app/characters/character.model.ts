export type AttributeType = 'strength' | 'dexterity' | 'constitution' | 'wisdom' | 'intelligence' | 'charisma';

export interface Modifier {
  value: number;
  modes: string[];
  label: string;
  description: string;
  accent: 'dagger';
}

export interface Attribute {
  type: AttributeType;
  value: number;
  modifiers: Modifier[];
}

export interface Skill {
  label: string;
  attribute: AttributeType;
  modifiers: Modifier[];
}

export interface Tracker {
  label: string;
  counter: boolean[];
}

export interface Attack {
  label: string;
  range: number;
  hit: number;
  damage: Modifier[];
  mode: string;
}

export interface Appraisal {
  value: string;
  appraiser: string;
}

export interface Speed {
  label: string;
  value: number;
  modifiers: Modifier[];
}

export interface Item {
  name: string;
  quantity: number;
  unitPrices: Appraisal[];
  unitWeight: number;
  equipped: boolean;
  location: string;
}

export interface Character {
  id: string;
  stats: Attribute[];
  skills: Skill[];
  trackers: Tracker[];
  features: string;
  attacks: Attack[];
  inventory: Item[];
  modifiers: Modifier[];
  class: string;
  background: string;
  level: number;
  alignment: string;
  name: string;
  speeds: Speed[];
}
