'use client';

import { createContext, useEffect, useState } from 'react';

import { CartDTO } from '@dtos/Cart';
import { ProductDTO } from '@dtos/Products';
import { produce } from 'immer';

import { CartContextProps, CartProviderProps } from './CartContextProps';

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartDTO[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addNewItemToCart = (product: ProductDTO, quantity: number) => {
    const isExistItemInCart = cartItems.findIndex(
      (item) => item.product.id === product.id,
    );

    if (isExistItemInCart >= 0) {
      setCartItems((prevState) =>
        produce(prevState, (draft) => {
          draft[isExistItemInCart].quantity += quantity;
        }),
      );
    } else {
      setCartItems((prevState) => [
        ...prevState,
        {
          product,
          quantity,
        },
      ]);
    }
  };

  const removeItemToCart = (productId: string) => {
    setCartItems((prevState) =>
      prevState.filter((item) => item.product.id !== productId),
    );
  };

  const updateItemToCart = (productId: string, quantity: number) => {
    const isExistItemInCart = cartItems.findIndex(
      (item) => item.product.id === productId,
    );

    if (isExistItemInCart >= 0) {
      setCartItems((prevState) =>
        produce(prevState, (draft) => {
          draft[isExistItemInCart].quantity = quantity;
        }),
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartItems,
        addNewItemToCart,
        removeItemToCart,
        updateItemToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
