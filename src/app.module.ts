import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [ MongooseModule.forRoot(
      'mongodb+srv://profesor:SakxqlC9o8HyVD1u@dwf-07.ym1u2cb.mongodb.net/taskflow'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
