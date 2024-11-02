export type Attributes = {
  constitution: number;
  dexterity: number;
  intelligence: number;
  strength: number;
};

export type SubAttributes = {
  healthPoints: number; // CON
  recovery: number; // CON
  criticalChance: number; // DEX
  evasionChance: number; // DEX
  speed: number; // DEX
  physicalDamage: number; //STR
  physicalResistence: number; // STR
  magicalDamage: number; // INT
  magicalResistence: number; // INT
};
