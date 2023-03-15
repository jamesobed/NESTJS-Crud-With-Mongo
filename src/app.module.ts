import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import config from './config/keys';

@Module({
  providers: [AppService],
  controllers: [AppController],
  imports: [UserModule, MongooseModule.forRoot(config.MONGOURI)],
})
export class AppModule {}
