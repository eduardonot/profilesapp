import { Attributes } from "./Attributes";

export type Item = {
  name: string;
  description: string;
  icon: string;
  attributes?: Attributes;
};
