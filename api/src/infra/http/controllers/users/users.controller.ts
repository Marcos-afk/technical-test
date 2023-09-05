import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthenticateUserDTO } from '@application/users/dtos/authenticate-user.dto';
import { CreateUserDTO } from '@application/users/dtos/create-user.dto';
import { AuthenticateUserUseCase } from '@application/users/useCases/authenticateUser/authenticate-user.useCase';
import { SignUpUseCase } from '@application/users/useCases/signUp/sign-up.useCase';

import {
  AuthenticateUserResponse,
  SignUpResponse,
} from './types/response.props';

import { Response } from 'express';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly signUpUseCase: SignUpUseCase,
    private readonly authenticateUserUseCase: AuthenticateUserUseCase,
  ) {}

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

  @ApiOperation({
    description: 'Login de usuário na plataforma',
  })
  @ApiResponse({
    description: 'OK',
    type: AuthenticateUserResponse,
    status: HttpStatus.OK,
  })
  @Post('authenticate-user')
  async authenticateUser(
    @Body() authenticateUserDto: AuthenticateUserDTO,
    @Res() res: Response,
  ) {
    const response =
      await this.authenticateUserUseCase.execute(authenticateUserDto);

    return res.status(HttpStatus.OK).json({
      message: 'Sessão criada com sucesso!',
      response,
    });
  }
}
