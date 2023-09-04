import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({
    example: 'John Doe',
    description: 'Nome do usuário',
    type: String,
  })
  @IsNotEmpty({ message: 'Nome de usuário é obrigatório' })
  @IsString({ message: 'Nome de usuário deve ser uma string' })
  @MaxLength(50, {
    message: 'Nome de usuário deve ter no máximo 50 caracteres',
  })
  @MinLength(5, { message: 'Nome de usuário deve ter no mínimo 5 caracteres' })
  readonly name: string;

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

  @ApiProperty({
    example: '+5522980840394',
    description: 'Número de telefone do usuário',
    type: String,
  })
  @IsNotEmpty({ message: 'Número de telefone é obrigatório' })
  @IsPhoneNumber('BR', { message: 'Número de telefone inválido' })
  readonly cell_phone: string;
}
