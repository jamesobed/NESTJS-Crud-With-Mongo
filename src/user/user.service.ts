import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserInterface>,
  ) {}
  // private readonly UserInstance: UserInterface[] = [
  //   {
  //     id: '63f555hkgjt55e845330fd60',
  //     userName: 'Developer',
  //     firstName: 'Wamllel',
  //     lastName: 'Doherty',
  //     email: 'edsedd@gmmail.com',
  //     phoneNumber: 'efwkwees',
  //     password: '$2a$10$/Xpd0idYH8Xyv/V6.erareWSx4v7G8dFr8A3fyySKVCdoLQhf72Lq',
  //     avatar:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nG8OgXmMOXXiwb…',
  //     isVerified: false,
  //     token: 'hghgjgif-3af4-4843-987d-d8bc5c748a71',
  //     role: 'user',
  //   },
  //   {
  //     id: '63f555qwe3855e845330fd60',
  //     userName: 'Gbadegbo',
  //     firstName: 'Peter',
  //     lastName: 'Tesed Ayogunle',
  //     email: 'edsedd@gmmail.com',
  //     phoneNumber: 'efwkwees',
  //     password: '$2a$10$/Xpd0idYH8Xyv/V6.erareWSx4v7G8dFr8A3fyySKVCdoLQhf72Lq',
  //     avatar:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nG8OgXmMOXXiwb…',
  //     isVerified: false,
  //     token: 'b27924c0-3af4-4843-987d-d8bc5c748a71',
  //     role: 'user',
  //   },
  //   {
  //     id: '6puoup9fad855e845330fd60',
  //     userName: 'Kayode',
  //     firstName: 'Oluwole',
  //     lastName: 'Tesed developer',
  //     email: 'edsedd@gmmail.com',
  //     phoneNumber: 'efwkwees',
  //     password: '$2a$10$/Xpd0idYH8Xyv/V6.erareWSx4v7G8dFr8A3fyySKVCdoLQhf72Lq',
  //     avatar:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nG8OgXmMOXXiwb…',
  //     isVerified: false,
  //     token: 'b27924c0-3af4-4843-987d-d8bc5c748a71',
  //     role: 'user',
  //   },
  // ];
  //

  async findAll(): Promise<UserInterface[]> {
    return await this.userModel.find();
  }
  async findByID(id): Promise<UserInterface> {
    return await this.userModel.findOne({ _id: id });
  }

  async ceateDirect(user: UserInterface): Promise<UserInterface> {
    return await this.userModel.create(user);
  }
  async ceate(user: UserInterface): Promise<UserInterface> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async delete(id: string): Promise<UserInterface> {
    return await this.userModel.findByIdAndDelete(id);
  }

  async update(id: string, user: UserInterface): Promise<UserInterface> {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
}
