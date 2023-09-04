'use client';

import { useCart } from '@hooks/cart';
import { formatNumberIntoMonetaryValue } from '@utils/formatNumber';
import { CreditCard } from 'lucide-react';
import Image from 'next/image';

import { ProductDetailsProps } from './ProductDetailsProps';
import * as S from './styles';

export function ProductDetails({ product }: ProductDetailsProps) {
  const { addNewItemToCart } = useCart();

  return (
    <S.Container>
      <S.Preview>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={105}
          height={99}
        />
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={467}
          height={471}
        />
      </S.Preview>
      <S.Details>
        <S.Description>{product.description}</S.Description>
        <S.PaymentInformation>
          <CreditCard width={24} height={24} />
          <S.Price>
            {formatNumberIntoMonetaryValue(product.price / 100)}
          </S.Price>
        </S.PaymentInformation>
        <button onClick={() => addNewItemToCart(product, 1)}>
          Adicionar ao carrinho
        </button>
      </S.Details>
    </S.Container>
  );
}
