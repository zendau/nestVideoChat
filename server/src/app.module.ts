import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersGateway } from './users/users.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1434,
      username: 'sa',
      password: 'root',
      database: 'test',
      synchronize: true,
      autoLoadEntities: true,
      extra: {
        trustServerCertificate: true,
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersGateway],
})
export class AppModule {}
