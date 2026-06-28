import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Project, ProjectDocument } from 'projects/schemas/project.schema';
import { Task, TaskDocument } from 'tasks/schemas/task.schema';
import { CommentDocument, Comment } from 'comments/schemas/comment.schema';


@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
        @InjectModel(Task.name) private taskModel: Model<TaskDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>
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
    async findOne(id: number): Promise<User | null> {
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
        return this.projectModel.find({ ownerId: new Types.ObjectId(userId) }).lean().exec();
    }

    async findTasks(userId: string) {
        return this.taskModel.find({ assignedTo: userId }).lean().exec();
    }

    async findComments(userId: string) {
        return this.commentModel.find({ authorId: userId }).lean().exec();
    }



}
