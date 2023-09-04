import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { StripeService } from '@infra/stripe/stripe.service';

import {
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
}
