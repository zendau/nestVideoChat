import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PeerServer } from 'peer';

const PEER_PORT = 9000;
const NEST_PORT = 3000;

const peerServer = PeerServer({ port: PEER_PORT, path: '/' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  await app.listen(NEST_PORT);
}
bootstrap();
