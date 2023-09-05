import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { UnauthorizedError } from '@common/errors/types/unauthorized-request-error';

import { AuthService } from '../auth.service';
import { JwtPayloadProps } from '../types/jwt-payload-props';

import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  public async validate(jwtPayload: JwtPayloadProps) {
    const user = this.authService.validateUser(jwtPayload.userId);
    if (!user) {
      throw new UnauthorizedError(
        'Código de identificação de usuário inválido.',
      );
    }

    return user;
  }
}
