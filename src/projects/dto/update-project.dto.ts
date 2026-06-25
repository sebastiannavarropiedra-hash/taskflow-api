import { IsString, IsNotEmpty, IsOptional, IsDateString, IsMongoId } from 'class-validator';

export class UpdateProjectDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsOptional()
    description!: string;

    @IsDateString()
    @IsOptional()
    startDate!: Date;

    @IsDateString()
    @IsOptional()
    endDate!: Date;

    @IsMongoId()
    @IsNotEmpty()
    ownerId!: string;



}