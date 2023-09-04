/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */

import { CartDTO } from '@dtos/Cart';
import { ProductDTO } from '@dtos/Products';

export interface CartContextProps {
  cart: CartDTO[];
  addNewItemToCart: (product: ProductDTO, quantity: number) => void;
  removeItemToCart: (productId: string) => void;
  updateItemToCart: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export interface CartProviderProps {
  children: React.ReactNode;
}
