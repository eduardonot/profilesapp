export type Attributes = {
  constitution: number;
  dexterity: number;
  intelligence: number;
  strength: number;
};

export type SubAttributes = {
  healthPoints: number; // CON
  recovery: number; // CON
  criticalRate: number; // DEX
  evasionRate: number; // DEX
  speed: number; // DEX
  physicalDamage: number; //STR
  physicalResistence: number; // STR
  magicalDamage: number; // INT
  magicalResistence: number; // INT
};
