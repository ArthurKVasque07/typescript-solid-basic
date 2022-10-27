import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../persistency';
import { ShoppingCart } from './shopping-cart';
import { ICustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: ICustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      console.log('carrinho vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Pedido recebido, com total ${this.shoppingCart.totalWithDiscount()}`,
    );
    this.persistency.saveOrder();
    this.shoppingCart.clear();

    console.log(
      'O cliente é: ' +
        this.customer.getName() +
        'Cpf/Cnpj: ' +
        this.customer.getIDN(),
    );
  }
}
