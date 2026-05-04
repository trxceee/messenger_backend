import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { CallService } from './call.service';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: { origin: { origin: '*' } },
  transports: ['websocket'],
  // namespace: 'call',
})
export class CallGateway {
  constructor(private readonly callService: CallService) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('callOffer')
  public async handleCreateOffer(
    @MessageBody() data: { chatId: string; offer: RTCSessionDescriptionInit },
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.handshake.auth.userId;
    if (!userId) return client.disconnect();

    client.to(`chat:${data.chatId}`).emit('call:offer', data.offer);
  }

  @SubscribeMessage('callAnswer')
  public async handleCreateAnswer(
    @MessageBody() data: { chatId: string; answer: RTCSessionDescriptionInit },
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.handshake.auth.userId;
    if (!userId) return client.disconnect();

    client.to(`chat:${data.chatId}`).emit('call:answer', data.answer);
  }

  @SubscribeMessage('iceCandidate')
  public async handleIceCandidate(
    @MessageBody() data: { chatId: string; candidate: RTCIceCandidate },
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.handshake.auth.userId;
    if (!userId) return client.disconnect();

    client.to(`chat:${data.chatId}`).emit('call:ice-candidate', data.candidate);
  }

  @SubscribeMessage('closeCall')
  public async handleCloseCall(
    @MessageBody() data: { chatId: string },
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.handshake.auth.userId;
    if (!userId) return client.disconnect();

    client.to(`chat:${data.chatId}`).emit('call:on-closing');
  }
}
