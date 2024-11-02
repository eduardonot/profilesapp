import { Attributes, SubAttributes } from "@/types/Attributes";

export const baseDamageCalculator = (baseDamage: number): number => {
  const minimumDamage = Math.floor(baseDamage * 0.9);
  const maxDamage = Math.floor(baseDamage * 1.1);
  const damage =
    Math.floor(Math.random() * (maxDamage - minimumDamage)) + minimumDamage;
  return damage;
};

export const calculateSubAttributes = (
  attributes: Attributes
): SubAttributes => {
  return {
    healthPoints: 2 * attributes.constitution,
    recovery: 1.1 * attributes.constitution,
    criticalChance: 0.5 * attributes.dexterity,
    evasionChance: 0.5 * attributes.dexterity,
    speed: 1 * attributes.dexterity,
    physicalDamage: baseDamageCalculator(2 * attributes.strength),
    physicalResistence: 1 * attributes.strength,
    magicalDamage: baseDamageCalculator(2 * attributes.intelligence),
    magicalResistence: 1 * attributes.intelligence,
  };
};
