import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema({ timestamps: true, collection: 'Comments' })
export class Comment {
  @Prop({ required: true })
  text?: string;

  @Prop({ type: Types.ObjectId, ref: 'Task', required: true })
  taskId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Project', required: false })
  projectId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  authorId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: false })
  ownerId!: Types.ObjectId;

}

export const CommentSchema = SchemaFactory.createForClass(Comment);
