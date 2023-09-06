'use client';

import { createContext, useEffect, useState } from 'react';

import cookies from 'js-cookie';

import { TokenContextProps, TokenProviderProps } from './TokenContextProps';

export const TokenContext = createContext({} as TokenContextProps);

export const TokenProvider = ({ children }: TokenProviderProps) => {
  const [token, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    const tokenFromCookie = cookies.get('technical-token');
    if (tokenFromCookie) {
      setToken(tokenFromCookie);
    }
  }, []);

  const login = (token: string) => {
    setToken(token);
    cookies.set('technical-token', token);
  };

  const logout = () => {
    setToken(undefined);
    cookies.remove('technical-token');
  };

  return (
    <TokenContext.Provider
      value={{
        token,
        login,
        logout,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
