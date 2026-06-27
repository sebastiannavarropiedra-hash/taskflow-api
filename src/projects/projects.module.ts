import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './schemas/project.schema';
import { TasksModule } from 'tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
    TasksModule, 
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [MongooseModule], 
})
export class ProjectsModule {}
