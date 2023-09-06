'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useToken } from '@hooks/token';
import * as Dialog from '@radix-ui/react-dialog';
import axios, { AxiosError } from 'axios';
import { Eye, User, X } from 'lucide-react';
import { useForm } from 'react-hook-form';

import * as S from './styles';
import { SignInFormProps, SignInFormSchema } from './validate';

export function SignInModal() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useToken();

  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting },
    reset,
  } = useForm<SignInFormProps>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(SignInFormSchema),
  });

  const handleSignIn = async ({ email, password }: SignInFormProps) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/authenticate-user`,
        {
          email,
          password,
        },
      );

      reset({
        email: '',
        password: '',
      });

      login(data.response.token);
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error.response?.data.message
          : 'Erro ao fazer login, verifique seus dados e tente novamente';

      alert(message);
    }
  };

  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <S.Title>
          <User width={16} height={16} /> <span>Faça login</span>
        </S.Title>
        <S.CloseButton>
          <X width={16} height={16} />
        </S.CloseButton>

        <form onSubmit={handleSubmit(handleSignIn)}>
          <input type="email" placeholder="Email" {...register('email')} />
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
            Fazer Login
          </S.SubmitButton>
        </form>
      </S.Content>
    </Dialog.Portal>
  );
}
