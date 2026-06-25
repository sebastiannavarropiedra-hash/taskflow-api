import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name?: string;

  @IsEmail()
  email?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  passwordHash?: string;
}
