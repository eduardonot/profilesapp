import { Attributes } from "./Attributes";

export type Creature = {
  name: string;
  level: number;
  attributes: Attributes;
  baseDamage: number;
};
