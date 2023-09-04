import { ApiProperty } from '@nestjs/swagger';

import { Product } from '@infra/stripe/types/product.props';
import { generateDefaultProduct } from '@infra/stripe/utils/generate-default-product.util';

export class FindProductsResponse {
  @ApiProperty({
    description: 'Mensagem de resposta',
    example: 'Lista de produtos!',
    type: String,
  })
  message: string;

  @ApiProperty({
    description: 'Produtos',
    example: [generateDefaultProduct()],
  })
  products: Product[];
}

export class FindProductByIdResponse {
  @ApiProperty({
    description: 'Mensagem de resposta',
    example: 'Produtos encontrado!',
    type: String,
  })
  message: string;

  @ApiProperty({
    description: 'Produto',
    example: generateDefaultProduct(),
  })
  product: Product;
}
