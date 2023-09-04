import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserDTO } from '@application/users/dtos/create-user.dto';
import { SignUpUseCase } from '@application/users/useCases/signUp/sign-up.useCase';

import { SignUpResponse } from './types/response.props';

import { Response } from 'express';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}

  @ApiOperation({
    description: 'Cadastro de usuário na plataforma',
  })
  @ApiResponse({
    description: 'CREATED',
    type: SignUpResponse,
    status: HttpStatus.CREATED,
  })
  @Post('sign-up')
  async signUp(@Body() createUserDto: CreateUserDTO, @Res() res: Response) {
    const user = await this.signUpUseCase.execute(createUserDto);

    return res.status(HttpStatus.CREATED).json({
      message: 'Usuário cadastrado com sucesso!',
      user,
    });
  }
}
