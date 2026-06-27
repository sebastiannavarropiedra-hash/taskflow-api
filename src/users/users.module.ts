import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { User, UserSchema } from './schemas/users.schema';
import { ProjectsModule } from 'projects/projects.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ProjectsModule, 
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
