import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
  IsOptional
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(50)
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsOptional()
  @MaxLength(100)
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  @MinLength(8)
  @MaxLength(20)
  @IsOptional()
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).+$/, {
    message: 'La contraseña debe tener mayúscula, minúscula, número y símbolo'
  })
  passwordHash?: string;
}
