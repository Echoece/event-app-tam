import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Response } from 'express';
//import { CreateUserDto } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  create(@Body() createUser: User) {
    return this.userService.create(createUser);
  }

  @Post('login')
  async login(@Body() createUser: User, @Res() res: Response) {
    const user = await this.userService.login(createUser);
    if (user) {
      return res.status(200).json({ message: 'Logged in successfully.' });
    }
    return res.status(404).json({ message: 'Logged in failed.' });
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser: User) {
    return this.userService.update(+id, updateUser);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    const user = await this.userService.remove(+id);
    if (user) return 'Delete successfully';
    return 'Delete failed';
  }
}
