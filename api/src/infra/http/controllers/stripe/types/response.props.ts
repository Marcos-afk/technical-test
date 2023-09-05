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

export class CheckoutResponse {
  @ApiProperty({
    description: 'Mensagem de resposta',
    example: 'Url de pagamento gerada com sucesso!',
    type: String,
  })
  message: string;

  @ApiProperty({
    description: 'Url de pagamento',
    example:
      'https://checkout.stripe.com/c/pay/cs_test_a16X8SnCPVpffMEA4TzZ699nAmzP9bZmVHYBC48eIPLB7pa4EWDmtqDjfs#fidkdWxOYHwnPyd1blpxYHZxWjA0SHNof1dHQUkwZ282PTRKS2k9N0sydGJXaGhKUHdvVDFdVnNUd29rTTdnPF1wUkd2RERPf3NTfXNfdlRDRm5qfH9HSUQxRH1dcH90bkd0VjJ8STZXd0wyNTVkX243Rj1KbCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl',
    type: String,
  })
  url: string;
}
