import { IsString, IsMongoId } from 'class-validator';


export class UpdateCommentDto {
 @IsString()
  text!: string;

  @IsMongoId()
  taskId!: string;

  @IsMongoId()
  authorId!: string;
}