import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";


export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })


export class Project {
    @Prop({ required: true })
    title!: string;

    @Prop()
    description?: string;

    @Prop({ type: Date })
    startDate?: Date;

    @Prop({ type: Date })
    endDate?: Date;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    ownerId!: string;

    @Prop({ required: false, select: false })
    passwordHash?: string;




}

export const ProjectSchema = SchemaFactory.createForClass(Project);