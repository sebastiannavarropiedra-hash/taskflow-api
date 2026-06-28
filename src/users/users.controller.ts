import { Controller, Delete, Get, Param, Patch, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }


  @Get()
  findALL() {
    return this.usersService.findAll();
  }



  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);

  }

  @Get(':id/projects')   
  findProjects(@Param('id') id: string) { return this.usersService.findProjects(id); }

  @Get(':id/tasks')
  findTasks(@Param('id') id: string) { return this.usersService.findTasks(id); }

  @Get(':id/comments')
  findComments(@Param('id') id: string) { return this.usersService.findComments(id); }

  @Get(':id')             
  findOne(@Param('id') id: string) { return this.usersService.findOne(id); }



}
