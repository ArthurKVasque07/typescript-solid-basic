import { CardItem } from './interfaces/cart-item';

export class Product implements CardItem {
  constructor(public name: string, public price: number) {}
}
