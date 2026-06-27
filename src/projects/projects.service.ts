import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Task, TaskDocument } from 'tasks/schemas/task.schema';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
        @InjectModel(Task.name) private taskModel: Model<TaskDocument>,
    ) { }

    async create(createProjectDto: CreateProjectDto): Promise<Project> {
        const project = new this.projectModel(createProjectDto);
        return project.save();
    }

    async findAll(): Promise<Project[]> {
        return this.projectModel
            .find()
            .populate('ownerId')
            .exec();
    }

    async findOne(id: string): Promise<Project | null> {
        return this.projectModel.findById(id).populate('ownerId').exec();
    }

    async update(id: string, updateProjectDto: UpdateProjectDto): Promise<Project | null> {
        return this.projectModel.findByIdAndUpdate(id, updateProjectDto, { new: true }).exec();
    }

    async remove(id: string): Promise<Project | null> {
        return this.projectModel.findByIdAndDelete(id).exec();
    }

    async findTasks(projectId: string) {
        return this.taskModel.find({ projectId }).exec();
    }

}
