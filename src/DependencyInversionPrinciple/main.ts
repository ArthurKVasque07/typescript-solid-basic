/* 
Princípio de Inversão de Dependência (DIP)
O Princípio de Inversão de Dependência possui duas definições: 
(1) módulos de alto nível não devem depender de módulos de baixo nível e ambos devem depender de abstrações; 
(2) abstrações não devem depender de detalhes, mas detalhes devem depender de abstrações.
*/
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import {
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Arthur', 'Vasquez', '777');
// const enterpriseCustomer = new EnterpriseCustomer('Arthur', '7777/7777');
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 49.91));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
