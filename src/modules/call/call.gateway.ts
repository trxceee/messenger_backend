import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: { origin: { origin: '*' } },
  transports: ['websocket'],
})
export class CallGateway {
  constructor() {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('callOffer')
  public async handleCreateOffer(
    @MessageBody() data: { targetUserId: string; chatId: string; offer: RTCSessionDescriptionInit },
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.handshake.auth.userId;
    if (!userId) return client.disconnect();

    client
      .to(`room:${data.targetUserId}`)
      .emit('call:offer', { data: data.offer, userId, chatId: data.chatId });
  }

  @SubscribeMessage('callAnswer')
  public async handleCreateAnswer(
    @MessageBody() data: { targetUserId: string; answer: RTCSessionDescriptionInit },
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.handshake.auth.userId;
    if (!userId) return client.disconnect();

    client
      .to(`room:${data.targetUserId}`)
      .emit('call:answer', data.answer);
  }

  @SubscribeMessage('iceCandidate')
  public async handleIceCandidate(
    @MessageBody() data: { targetUserId: string; candidate: RTCIceCandidate },
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.handshake.auth.userId;
    if (!userId) return client.disconnect();

    client
      .to(`room:${data.targetUserId}`)
      .emit('call:ice-candidate', data.candidate);
  }

  @SubscribeMessage('closeCall')
  public async handleCloseCall(
    @MessageBody() data: { targetUserId: string },
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.handshake.auth.userId;
    if (!userId) return client.disconnect();

    client
      .to(`room:${data.targetUserId}`)
      .emit('call:on-closing');
  }
}