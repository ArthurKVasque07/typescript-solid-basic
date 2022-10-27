import { IPersistencyProtocol } from './services/interfaces/persistency-protocol';

export class Persistency implements IPersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
}
