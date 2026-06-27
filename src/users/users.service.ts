import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Project, ProjectDocument } from 'projects/schemas/project.schema';
import { Task, TaskDocument } from 'tasks/schemas/task.schema';


@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
        @InjectModel(Task.name) private taskModel: Model<TaskDocument>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = new this.userModel(createUserDto);
        return user.save();
    }


    // obtener todos los usuarios
    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }


    // obtener un usuario por id
    async findOne(id: string): Promise<User | null> {
        return this.userModel.findById(id).exec();
    }

    // actualizar un usuario por id
    async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }


    // Eliminar usuario
    async remove(id: string): Promise<User | null> {
        return this.userModel.findByIdAndDelete(id).exec();
    }

    async findProjects(userId: string) {
        return this.projectModel.find({ ownerId: userId }).exec();
    }

    async findTasks(userId: string) {
        return this.taskModel.find({ assignedTo: userId }).exec();
    }

}
