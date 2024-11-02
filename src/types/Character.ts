import { Appearance } from "./Appearance";
import { Attributes } from "./Attributes";
import { Item } from "./Item";

export interface Character {
  name: string;
  experience: number;
  level: number;
  attributes: Attributes;
  appearance?: Appearance;
  isMage: boolean;
}

export interface CharacterEquipments {
  head?: Item;
  armor?: Item;
  legs?: Item;
  boots?: Item;
  leftHand?: Item;
  rightHand?: Item;
  necklace?: Item;
  ring?: Item;
}
