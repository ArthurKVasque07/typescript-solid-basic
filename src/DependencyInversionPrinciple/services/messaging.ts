import { IMessagingProtocol } from './interfaces/messaging-protocol';

export class Messaging implements IMessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}
