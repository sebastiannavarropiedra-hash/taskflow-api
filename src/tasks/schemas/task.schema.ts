import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema({ timestamps: true })
export class Task {
  @Prop({ required: true })
  title?: string;

  @Prop()
  description?: string;

  @Prop({ required: true, enum: ['pending', 'in-progress', 'completed'], default: 'pending' })
  status?: string;

  @Prop()
  deadline?: Date;

  @Prop({ type: Types.ObjectId, ref: 'Project', required: true })
  projectId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  assignedTo?: Types.ObjectId;
  
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  ownerId!: Types.ObjectId;

}

export const TaskSchema = SchemaFactory.createForClass(Task);
