import { formatNumberIntoMonetaryValue } from '@utils/formatNumber';
import Image from 'next/image';

import { CardProductProps } from './CardProductProps';
import * as S from './styles';

export function CardProduct({
  product: { name, imageUrl, price },
}: CardProductProps) {
  return (
    <S.Container href="#">
      <Image src={imageUrl} alt={name} width={520} height={320} />

      <S.Details>
        <span>{name}</span>
        <span>{formatNumberIntoMonetaryValue(price / 100)}</span>
      </S.Details>
      <button>Adicionar ao carrinho</button>
    </S.Container>
  );
}
