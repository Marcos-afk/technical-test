import { ApiProperty } from '@nestjs/swagger';

import { UserEntity } from '@application/users/entities/user.entity';
import { UserMapper } from '@application/users/mappers/user.mapper';
import {
  generateDefaultSession,
  SessionProps,
} from '@application/users/utils/generate-default-session.util';
import { generateDefaultUser } from '@application/users/utils/generate-default-user.util';

export class SignUpResponse {
  @ApiProperty({
    description: 'Mensagem de resposta',
    example: 'Usuário cadastrado com sucesso!',
    type: String,
  })
  message: string;

  @ApiProperty({
    description: 'Detalhes do usuário cadastrado',
    example: UserMapper.toDto(generateDefaultUser()),
    type: UserEntity,
  })
  user: UserEntity;
}

export class AuthenticateUserResponse {
  @ApiProperty({
    description: 'Mensagem de resposta',
    example: 'Sessão criada com sucesso!',
    type: String,
  })
  message: string;

  @ApiProperty({
    description: 'Token e dados do usuário',
    example: generateDefaultSession(),
    type: typeof generateDefaultSession(),
  })
  response: SessionProps;
}
