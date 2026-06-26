import { IsString, IsOptional, IsEnum, IsDateString, IsMongoId } from 'class-validator';


export class UpdateTaskDto {
  @IsString()
  title: string | undefined;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(['pending', 'in-progress', 'completed'])
  status!: string;

  @IsOptional()
  @IsDateString()
  deadline?: string;

  @IsMongoId()
  projectId!: string;

  @IsOptional()
  @IsMongoId()
  assignedTo?: string;

}

