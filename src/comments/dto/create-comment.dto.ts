import { IsString, IsMongoId } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  text?: string;

  @IsMongoId()
  taskId?: string;

  @IsMongoId()
  authorId?: string;
}
