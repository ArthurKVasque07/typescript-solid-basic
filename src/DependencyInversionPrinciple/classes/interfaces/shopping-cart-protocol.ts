import { CardItem } from './cart-item';

export interface IShoppingCartProtocol {
  items: Readonly<CardItem[]>;
  addItem(item: CardItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
