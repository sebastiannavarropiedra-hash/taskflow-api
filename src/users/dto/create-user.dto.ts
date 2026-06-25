import { IsString, IsNotEmpty, IsEmail, MinLength, MaxLength, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  name!: string;

  @IsEmail()
  @MaxLength(100)
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).+$/, {
    message: 'La contraseña debe tener mayúscula, minúscula, número y símbolo'
  })
  passwordHash!: string;
}