'use client';

import AppLogo from '@assets/logo.png';
import { SignUpModal } from '@components/SignUpModal';
import * as Dialog from '@radix-ui/react-dialog';
import { ShoppingBag, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

export function NavBar() {
  return (
    <S.Container>
      <a href="/">
        <Image src={AppLogo} alt="" />
      </a>
      <S.Actions>
        <Link href="/cart">
          <ShoppingBag width={14} height={14} />
          <span>Carrinho</span>
        </Link>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.SignUpButton>
              <User width={14} height={14} />
              <span>Entrar</span>
            </S.SignUpButton>
          </Dialog.Trigger>
          <SignUpModal />
        </Dialog.Root>
      </S.Actions>
    </S.Container>
  );
}
