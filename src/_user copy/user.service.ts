import { Injectable } from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface';
@Injectable()
export class UserService {
  private readonly UserInstance: UserInterface[] = [
    {
      id: '63f5553fad855e845330fd60',
      userName: 'Wamllel',
      firstName: 'Wamllel',
      lastName: 'Tesed developer',
      email: 'edsedd@gmmail.com',
      phoneNumber: 'efwkwees',
      password: '$2a$10$/Xpd0idYH8Xyv/V6.erareWSx4v7G8dFr8A3fyySKVCdoLQhf72Lq',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nG8OgXmMOXXiwb…',
      isVerified: false,
      token: 'b27924c0-3af4-4843-987d-d8bc5c748a71',
      role: 'user',
    },
    {
      id: '63f5553fad855e845330fd60',
      userName: 'Wamllel',
      firstName: 'Wamllel',
      lastName: 'Tesed developer',
      email: 'edsedd@gmmail.com',
      phoneNumber: 'efwkwees',
      password: '$2a$10$/Xpd0idYH8Xyv/V6.erareWSx4v7G8dFr8A3fyySKVCdoLQhf72Lq',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nG8OgXmMOXXiwb…',
      isVerified: false,
      token: 'b27924c0-3af4-4843-987d-d8bc5c748a71',
      role: 'user',
    },
    {
      id: '63f5553fad855e845330fd60',
      userName: 'Wamllel',
      firstName: 'Wamllel',
      lastName: 'Tesed developer',
      email: 'edsedd@gmmail.com',
      phoneNumber: 'efwkwees',
      password: '$2a$10$/Xpd0idYH8Xyv/V6.erareWSx4v7G8dFr8A3fyySKVCdoLQhf72Lq',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nG8OgXmMOXXiwb…',
      isVerified: false,
      token: 'b27924c0-3af4-4843-987d-d8bc5c748a71',
      role: 'user',
    },
  ];
  getHello(): string {
    return 'Hello World!';
  }
  findAll(): UserInterface[] {
    return this.UserInstance;
  }
  findByID(id): UserInterface {
    return this.UserInstance.find((item) => item.id === id);
  }
}
