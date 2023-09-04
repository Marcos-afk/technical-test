import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { BadRequestInterceptor } from '@common/errors/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@common/errors/interceptors/not-found.interceptor';
import { UnauthorizedRequestInterceptor } from '@common/errors/interceptors/unauthorized-request.interceptor';
import { signaleLog } from '@common/signale';

import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, { cors: true });
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    app.useGlobalInterceptors(new BadRequestInterceptor());
    app.useGlobalInterceptors(new NotFoundInterceptor());
    app.useGlobalInterceptors(new UnauthorizedRequestInterceptor());

    const config = new DocumentBuilder()
      .setTitle('Test')
      .setDescription('application protocol interface Test')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api-docs', app, document);
    await app.listen(process.env.API_PORT);

    signaleLog('Server', 'Server is running', 'success');
  } catch (error) {
    signaleLog('Server', error.message, 'error');
    process.exit(1);
  }
}

bootstrap();
