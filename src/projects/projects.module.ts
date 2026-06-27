import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './schemas/project.schema';
import { Task, TaskSchema } from 'tasks/schemas/task.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Project.name, schema: ProjectSchema },
      { name: Task.name, schema: TaskSchema }, 
    ]),
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
