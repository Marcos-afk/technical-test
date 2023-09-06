import { useEffect, useState } from 'react';

import MaskGroup from '@assets/mask-group.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { CheckCircle, X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import * as S from './styles';
import { SuccessModalProps } from './SuccessModalProps';

export function SuccessModal({ open }: SuccessModalProps) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(open);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleHome = () => {
    router.push('/');
  };

  useEffect(() => {
    setModalOpen(open);
  }, [open]);

  return (
    <Dialog.Root open={modalOpen}>
      <Dialog.Portal>
        <S.Overlay />

        <S.Content>
          <S.Title>
            <CheckCircle width={16} height={16} /> <span>Sucesso!</span>
          </S.Title>
          <S.CloseButton onClick={closeModal}>
            <X width={16} height={16} />
          </S.CloseButton>
          <S.MaskGroupImage>
            <Image src={MaskGroup} alt="" />
          </S.MaskGroupImage>
          <S.Description>
            <span>Seu pedido foi concluído!</span>
            <span>Retornaremos com atualizações em seu e-mail.</span>
          </S.Description>

          <S.SubmitButton onClick={handleHome}>Entendi</S.SubmitButton>
        </S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
