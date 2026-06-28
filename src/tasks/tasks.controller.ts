import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema({ timestamps: true })
export class Task {
  @Prop({ required: true })
  title?: string;

  @Prop()
  description?: string;

  @Prop({ required: true, enum: ['pending', 'in_progress', 'completed'], default: 'pending' })
  status?: 'pending' | 'in_progress' | 'completed';

  @Prop()
  deadline?: Date;

  @Prop({ type: Types.ObjectId, ref: 'Project', required: true })
  projectId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  assignedTo?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  ownerId!: Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Comment' }] })
  comments?: Types.ObjectId[];

  @Prop({ type: Date, default: Date.now })
  createdAt?: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt?: Date;

  @Prop({ type: Date, default: null })
  completedAt?: Date | null;



}

export const TaskSchema = SchemaFactory.createForClass(Task);
