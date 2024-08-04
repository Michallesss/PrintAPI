// TODO:
// 1. Add rate limiting in this and other modules (https://docs.nestjs.com/security/rate-limiting)
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
