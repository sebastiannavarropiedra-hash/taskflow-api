import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task, TaskSchema } from './schemas/task.schema';
import { CommentsModule } from 'comments/comments.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]), CommentsModule

  ],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [MongooseModule],
})
export class TasksModule { }
