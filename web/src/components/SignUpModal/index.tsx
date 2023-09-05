'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import axios, { AxiosError } from 'axios';
import { Eye, User, X } from 'lucide-react';
import { useForm } from 'react-hook-form';

import * as S from './styles';
import { SignUpFormProps, SignUpFormSchema } from './validate';

export function SignUpModal() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting },
    reset,
  } = useForm<SignUpFormProps>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      cell_phone: '',
    },
    resolver: zodResolver(SignUpFormSchema),
  });

  const handleSignUp = async ({
    name,
    email,
    password,
    cell_phone,
  }: SignUpFormProps) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/sign-up`,
        {
          name,
          email,
          password,
          cell_phone,
        },
      );

      reset({
        name: '',
        email: '',
        password: '',
        cell_phone: '',
      });
      alert(data.message);
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error.response?.data.message
          : 'Erro ao cadastrar usuário, verifique seus dados e tente novamente';

      alert(message);
    }
  };

  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <S.Title>
          <User width={16} height={16} /> <span>Cadastre-se</span>
        </S.Title>
        <S.CloseButton>
          <X width={16} height={16} />
        </S.CloseButton>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <input
            type="text"
            placeholder="Nome completo"
            {...register('name')}
          />
          <input type="email" placeholder="Email" {...register('email')} />
          <input
            type="text"
            placeholder="Telefone"
            {...register('cell_phone')}
          />
          <S.PasswordFieldContainer>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              {...register('password')}
            />
            <button type="button" onClick={() => setShowPassword((e) => !e)}>
              <Eye width={16} height={16} />
            </button>
          </S.PasswordFieldContainer>
          <S.SubmitButton type="submit" disabled={!isValid || isSubmitting}>
            Criar minha conta
          </S.SubmitButton>
        </form>
      </S.Content>
    </Dialog.Portal>
  );
}
