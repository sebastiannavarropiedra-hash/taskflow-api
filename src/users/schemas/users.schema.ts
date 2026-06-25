import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Esto define el tipo de documento que usaremos en el service
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name?: string;

  @Prop({ required: true, unique: true })
  email?: string;

  @Prop({ required: true })
  passwordHash?: string;

  @Prop({ default: Date.now })
  createdAt?: Date;
}

// Exportamos el schema para registrarlo en el módulo
export const UserSchema = SchemaFactory.createForClass(User);
