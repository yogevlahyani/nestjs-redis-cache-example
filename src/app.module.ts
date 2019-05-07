import * as redisStore from 'cache-manager-redis-store';
import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
