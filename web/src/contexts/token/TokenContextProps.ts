/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */

export interface TokenContextProps {
  token: string | undefined;
  login: (token: string) => void;
  logout: () => void;
}

export interface TokenProviderProps {
  children: React.ReactNode;
}
