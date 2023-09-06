import { useContext } from 'react';

import { TokenContext } from '@contexts/token';

export const useToken = () => {
  return useContext(TokenContext);
};
