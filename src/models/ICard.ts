import { MouseEventHandler } from "react";

export interface ICard {
  isSearch?: boolean;
  result?: boolean;
  image?: string;
  name?: string;
}

export interface ICardFunctions {
  list: ICard;
  savePoke?: MouseEventHandler;
  isSearch?: boolean;
}
