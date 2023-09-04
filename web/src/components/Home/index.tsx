'use client';

import Presentation from '@assets/presentation.png';
import { CardProduct } from '@components/CardProduct';
import Image from 'next/image';

import { HomeProps } from './HomeProps';
import * as S from './styles';

export function Home({ data }: HomeProps) {
  return (
    <S.Container>
      <S.Hero>
        <div>Estilo e conforto para os seus pés</div>
        <Image src={Presentation} alt="" quality={100} />
      </S.Hero>
      <S.ProductsContainerWrapper>
        <S.ProductsContainer>
          {data.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </S.ProductsContainer>
      </S.ProductsContainerWrapper>
    </S.Container>
  );
}
