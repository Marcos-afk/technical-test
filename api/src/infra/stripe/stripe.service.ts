import { Injectable } from '@nestjs/common';

import { BadRequestError } from '@common/errors/types/bad-request-error';

import { stripe } from './stripe';

import Stripe from 'stripe';

@Injectable()
export class StripeService {
  async findProducts() {
    try {
      const response = await stripe.products.list({
        expand: ['data.default_price'],
        active: true,
      });

      return response.data.map((product) => {
        const price = product.default_price as Stripe.Price;

        return {
          id: product.id,
          name: product.name,
          imageUrl: product.images[0],
          price: price.unit_amount as number,
        };
      });
    } catch (err) {
      throw new BadRequestError(`Erro ao buscar produtos: ${err.message}`);
    }
  }

  async findProductById(product_id: string) {
    try {
      const product = await stripe.products.retrieve(product_id, {
        expand: ['default_price'],
      });

      const price = product.default_price as Stripe.Price;
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: price.unit_amount as number,
        defaultPriceId: price.id,
      };
    } catch (err) {
      throw new BadRequestError(`Erro ao buscar produtos: ${err.message}`);
    }
  }
}
