import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

// Esto define el tipo de documento que usaremos en el service
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name?: string;

  @Prop({ required: true, unique: true })
  email?: string;

  @Prop({ default: Date.now })
  createdAt?: Date;

  @Prop({ required: true, select: false })
  passwordHash?: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  ownerId: Types.ObjectId | undefined;


}

// Exportamos el schema para registrarlo en el módulo
export const UserSchema = SchemaFactory.createForClass(User);
