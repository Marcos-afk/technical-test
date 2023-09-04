import { useCart } from '@hooks/cart';
import { formatNumberIntoMonetaryValue } from '@utils/formatNumber';
import Image from 'next/image';
import Link from 'next/link';

import { CardProductProps } from './CardProductProps';
import * as S from './styles';

export function CardProduct({ product }: CardProductProps) {
  const { addNewItemToCart } = useCart();

  return (
    <S.Container>
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={520}
          height={320}
        />
      </Link>

      <S.Details>
        <span>{product.name}</span>
        <span>{formatNumberIntoMonetaryValue(product.price / 100)}</span>
      </S.Details>
      <button onClick={() => addNewItemToCart(product, 1)}>
        Adicionar ao carrinho
      </button>
    </S.Container>
  );
}
