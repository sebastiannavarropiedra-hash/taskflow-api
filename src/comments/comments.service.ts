import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) { }

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = new this.commentModel(createCommentDto);
    return comment.save();
  }

  async findAll(): Promise<Comment[]> {
    return this.commentModel
      .find()
      .populate('taskId', 'title status')
      .populate('authorId', 'name email')
      .exec();
  }

  async findOne(id: string): Promise<Comment | null> {
    return this.commentModel
      .findById(id)
      .populate('taskId', 'title status')
      .populate('authorId', 'name email')
      .exec();
  }

  async update(id: string, updateCommentDto: UpdateCommentDto): Promise<Comment | null> {
    return this.commentModel.findByIdAndUpdate(id, updateCommentDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Comment | null> {
    return this.commentModel.findByIdAndDelete(id).exec();
  }

  async findByAuthor(authorId: string) {
    return this.commentModel.find({ authorId }).exec();
  }


}
