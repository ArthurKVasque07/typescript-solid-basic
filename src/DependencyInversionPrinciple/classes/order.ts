import { OrderStatus } from './interfaces/order-status';
import { ICustomerOrder } from './interfaces/customer-protocol';
import { IShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { IMessagingProtocol } from '../services/interfaces/messaging-protocol';
import { IPersistencyProtocol } from '../services/interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: IShoppingCartProtocol,
    private readonly messaging: IMessagingProtocol,
    private readonly persistency: IPersistencyProtocol,
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
