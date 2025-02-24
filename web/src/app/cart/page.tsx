'use client';

import { useEffect, useState } from 'react';

import { SuccessModal } from '@components/SuccessModal';
import { useCart } from '@hooks/cart';
import { useToken } from '@hooks/token';
import { formatNumberIntoMonetaryValue } from '@utils/formatNumber';
import axios, { AxiosError } from 'axios';
import { Minus, Plus, Trash } from 'lucide-react';
import Image from 'next/image';

import * as S from './styles';

interface CartProps {
  searchParams: {
    session_id: string;
  };
}

export default function Cart({ searchParams }: CartProps) {
  const [showModal, setShowModal] = useState(false);
  const { cart, removeItemToCart, updateItemToCart, clearCart } = useCart();
  const { token } = useToken();

  const handleIncrementProduct = (productId: string, quantity: number) => {
    updateItemToCart(productId, quantity + 1);
  };

  const handleDecrementProduct = (productId: string, quantity: number) => {
    updateItemToCart(productId, quantity - 1);
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, cart) => {
      return acc + cart.product.price * cart.quantity;
    }, 0);
  };

  const calculateTotal = () => {
    return cart.reduce((acc, cart) => {
      return acc + cart.product.price * cart.quantity;
    }, 0);
  };

  const handleMakePurchase = async () => {
    const lineItems = cart.map((item) => {
      return {
        price: item.product.defaultPriceId,
        quantity: item.quantity,
      };
    });

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/stripe/checkout`,
        {
          lineItems,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      clearCart();
      window.location.href = data.url;
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error.response?.data.message
          : 'Erro, tente novamente mais tarde';
      alert(message);
    }
  };

  useEffect(() => {
    if (searchParams && searchParams.session_id) {
      setShowModal(true);
    }
  }, [searchParams]);

  return (
    <S.Container>
      <S.ItemsContainer>
        {cart.length > 0 ? (
          cart.map((item) => (
            <S.Item key={item.product.id}>
              <Image
                src={item.product.imageUrl}
                alt={item.product.name}
                width={150}
                height={150}
              />
              <S.Details>
                <S.Description>{item.product.description}</S.Description>
                <S.Actions>
                  <S.Price>
                    {formatNumberIntoMonetaryValue(item.product.price / 100)}
                  </S.Price>
                  <S.Buttons>
                    <S.RemoveButton
                      onClick={() => removeItemToCart(item.product.id)}
                    >
                      <Trash width={24} height={24} />
                    </S.RemoveButton>
                    <S.AdditionalButtonsContainer>
                      <button
                        onClick={() =>
                          handleDecrementProduct(item.product.id, item.quantity)
                        }
                      >
                        <Minus width={16} height={16} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleIncrementProduct(item.product.id, item.quantity)
                        }
                      >
                        <Plus width={16} height={16} />
                      </button>
                    </S.AdditionalButtonsContainer>
                  </S.Buttons>
                </S.Actions>
              </S.Details>
            </S.Item>
          ))
        ) : (
          <S.EmptyCart href="/">
            Sem produto, ir para a página inicial
          </S.EmptyCart>
        )}
        {showModal && <SuccessModal open={showModal} />}
      </S.ItemsContainer>
      <S.PaymentDetails>
        <S.MonetaryValues>
          <div>
            <S.MonetaryValueLabel>Sub total:</S.MonetaryValueLabel>
            <S.MonetaryValue>
              {formatNumberIntoMonetaryValue(calculateSubtotal() / 100)}
            </S.MonetaryValue>
          </div>
          <div>
            <S.MonetaryValueLabel>Frete:</S.MonetaryValueLabel>
            <S.FreeShippingValue>Grátis</S.FreeShippingValue>
          </div>
          <div>
            <S.MonetaryValueLabel>Valor total:</S.MonetaryValueLabel>
            <S.MonetaryValue>
              {formatNumberIntoMonetaryValue(calculateTotal() / 100)}
            </S.MonetaryValue>
          </div>
        </S.MonetaryValues>
        <button
          onClick={handleMakePurchase}
          disabled={!token || cart.length === 0}
        >
          Finalizar pedido
        </button>
      </S.PaymentDetails>
    </S.Container>
  );
}
