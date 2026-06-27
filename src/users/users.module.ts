import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { User, UserSchema } from './schemas/users.schema';
import { ProjectsModule } from 'projects/projects.module';
import { TasksModule } from 'tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ProjectsModule, 
    TasksModule, 
  ],  
  
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
