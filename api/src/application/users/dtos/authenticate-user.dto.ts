import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthenticateUserDTO {
  @ApiProperty({
    example: 'johndoe@email.com',
    description: 'Email do usuário',
    type: String,
  })
  @IsNotEmpty({ message: 'Email é obrigatório' })
  @IsEmail({}, { message: 'Email inválido' })
  readonly email: string;

  @ApiProperty({
    example: '12345678',
    description: 'Senha do usuário',
    type: String,
  })
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @IsString({ message: 'Senha deve ser uma string' })
  @MaxLength(16, { message: 'Senha deve ter no máximo 16 caracteres' })
  @MinLength(8, { message: 'Senha deve ter no mínimo 8 caracteres' })
  readonly password: string;
}
