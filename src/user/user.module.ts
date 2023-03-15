import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './schemas/user.schema';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
})
export class UserModule {}
