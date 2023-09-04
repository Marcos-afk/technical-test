'use client';

import AppLogo from '@assets/logo.png';
import { ShoppingBag, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

export function NavBar() {
  return (
    <S.Container>
      <Link href="/">
        <Image src={AppLogo} alt="" />
      </Link>
      <S.Actions>
        <Link href="#">
          <ShoppingBag width={14} height={14} />
          <span>Carrinho</span>
        </Link>
        <Link href="#">
          <User width={14} height={14} />
          <span>Entrar</span>
        </Link>
      </S.Actions>
    </S.Container>
  );
}
