import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CommentDocument, Comment } from 'comments/schemas/comment.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private taskModel: Model<TaskDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>
  ) { }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new this.taskModel(createTaskDto);
    return task.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().populate('projectId').populate('assignedTo', 'name email').exec();
  }

  async findOne(id: string): Promise<Task | null> {
    return this.taskModel.findById(id).populate('projectId').populate('assignedTo', 'name email').exec();
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task | null> {
    return this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Task | null> {
    return this.taskModel.findByIdAndDelete(id).exec();
  }

 async findComments(taskId: string) {
  // intenta match por string y por ObjectId (si es convertible)
  const filters: any[] = [{ taskId }];

  try {
    filters.push({ taskId: new Types.ObjectId(taskId) });
  } catch (e) {
    // no convertible a ObjectId -> ignorar
  }

  return this.commentModel.find({ $or: filters }).lean().exec();
}

  async findByStatus(status: 'pending' | 'in_progress' | 'completed') {
    return this.taskModel.find({ status }).exec();
  }



}
