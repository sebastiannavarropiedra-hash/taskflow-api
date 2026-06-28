import { Controller, Get, Post, Patch, Delete, Body, Param, Query, ParseEnumPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export enum TaskStatus {
  pending = 'pending',
  in_progress = 'in_progress',
  completed = 'completed',
}

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  // Ruta específica para comentarios de una tarea: debe ir antes de @Get(':id')
  @Get(':id/comments')
  findComments(@Param('id') id: string) {
    return this.tasksService.findComments(id);
  }

  // Ruta alternativa para filtrar por status (más explícita)
  @Get('filter')
  findByStatus(
    @Query('status', new ParseEnumPipe(TaskStatus, { optional: true })) status?: TaskStatus
  ) {
    if (status) return this.tasksService.findByStatus(status);
    return this.tasksService.findAll();
  }

  // Listado general con query param opcional; valida con ParseEnumPipe
  @Get()
  findAll(@Query('status', new ParseEnumPipe(TaskStatus, { optional: true })) status?: TaskStatus) {
    if (status) return this.tasksService.findByStatus(status);
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
