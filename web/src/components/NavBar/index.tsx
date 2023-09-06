'use client';

import { useState } from 'react';

import AppLogo from '@assets/logo.png';
import { SignInModal } from '@components/SignInModal';
import { SignUpModal } from '@components/SignUpModal';
import { useToken } from '@hooks/token';
import * as Dialog from '@radix-ui/react-dialog';
import { LogOut, ShoppingBag, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

export function NavBar() {
  const [modal, setModal] = useState<number>();
  const { token, logout } = useToken();

  const handleAlert = () => {
    const choice = window.prompt('Escolha uma opção:\n\n1. Cadastro\n2. Login');

    switch (choice) {
      case '1':
        setModal(1);
        break;
      case '2':
        setModal(2);
        break;
      default:
        break;
    }
  };

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
        {token ? (
          <S.LogoutButton onClick={logout}>
            <LogOut width={14} height={14} />
            Logout
          </S.LogoutButton>
        ) : (
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <S.SignUpButton onClick={handleAlert}>
                <User width={14} height={14} />
                <span>Entrar</span>
              </S.SignUpButton>
            </Dialog.Trigger>
            {modal === 1 && <SignUpModal />}
            {modal === 2 && <SignInModal />}
          </Dialog.Root>
        )}
      </S.Actions>
    </S.Container>
  );
}
