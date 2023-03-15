import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface';
import { UserService } from './user.service';
import { CreateUserDTO } from './userDTO/userDTO';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  // direct nest method
  @Post()
  createThin(@Body() create_user_dto: CreateUserDTO): string {
    return `Hello ${create_user_dto.firstName}. You just registered your account`;
  }

  // old ways with express
  @Post('/req')
  createThing(@Req() req: Request) {
    return req.body;
  }

  @Get()
  getHello(): UserInterface[] {
    return this.appService.findAll();
    // return 'This is just tested';
  }

  @Get('/nest')
  getNested(): string {
    // return this.appService.getHello();
    return 'This is just nested';
  }

  @Get('/:userId')
  getParamsId(@Param() params: { userId: string }): string {
    return `${params.userId} working userid params`;
  }

  @Get('/:this_is_user_id')
  getParamsId1(
    @Param('this_is_user_id') this_is_user_id: { userId: string },
  ): string {
    return `${this_is_user_id} querried`;
  }

  @Delete('/:userId')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteId(@Param() param, @Req() _req: Request): string {
    return `you are about to delete ${param.userId}`;
  }

  @Put(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(@Param('id') id, @Body() updateDTO: CreateUserDTO): string {
    return `${id} ${updateDTO.email}`;
  }
}
