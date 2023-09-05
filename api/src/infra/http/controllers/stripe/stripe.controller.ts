import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CheckoutDTO } from '@infra/stripe/dtos/checkout.dto';
import { StripeService } from '@infra/stripe/stripe.service';

import {
  CheckoutResponse,
  FindProductByIdResponse,
  FindProductsResponse,
} from './types/response.props';

import { Response } from 'express';

@ApiTags('Stripe')
@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @ApiOperation({
    description: 'Lista produtos da plataforma stripe',
  })
  @ApiResponse({
    description: 'OK',
    type: FindProductsResponse,
    status: HttpStatus.OK,
  })
  @Get('products')
  async findProducts(@Res() res: Response) {
    const products = await this.stripeService.findProducts();

    return res.status(HttpStatus.OK).json({
      message: 'Lista de produtos!',
      products,
    });
  }

  @ApiOperation({
    description: 'Buscar produto específico da plataforma stripe',
  })
  @ApiResponse({
    description: 'OK',
    type: FindProductByIdResponse,
    status: HttpStatus.OK,
  })
  @ApiParam({
    name: 'id',
    description: 'Id do produto',
    example: 'prod_OZrha1CW5EtxNI',
    type: String,
    required: true,
  })
  @Get('product/:id')
  async findProductById(@Param('id') id: string, @Res() res: Response) {
    const product = await this.stripeService.findProductById(id);

    return res.status(HttpStatus.OK).json({
      message: 'Produto encontrado!',
      product,
    });
  }

  @ApiOperation({
    description: 'Iniciar checkout gerando um link de pagamento',
  })
  @ApiResponse({
    description: 'OK',
    status: HttpStatus.OK,
    type: CheckoutResponse,
  })
  @Post('checkout')
  async checkout(@Body() checkoutDTO: CheckoutDTO, @Res() res: Response) {
    const url = await this.stripeService.checkout(checkoutDTO);

    return res.status(HttpStatus.OK).json({
      message: 'Url de pagamento gerada com sucesso!',
      url,
    });
  }
}
