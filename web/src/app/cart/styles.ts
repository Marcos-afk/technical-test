import { styled } from 'styled-components';

export const Container = styled.main`
  display: flex;
  margin-top: 3rem;
  padding: 0 6.5rem;
  gap: 1.125rem;

  @media (max-width: 1285px) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    justify-content: center;
  }

`;

export const ItemsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1285px) {
    flex: 1;
  }

`;

export const Item = styled.div`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 688px) {
    flex-direction: column;

    img {
      width: 100%;
      height: auto;
    }
  }
  
  img {
    border-radius: 8px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    flex-direction: column;
  }

`;

export const Buttons = styled.div`
  display: flex;
  gap: 1.25rem;

  @media (max-width: 450px) {
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.25rem;

  @media (max-width: 1086px) {
    font-size: 1.2rem;
  }

  @media (max-width: 960px) {
    font-size: 1rem;
  }
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Poppins', sans-serif;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.625rem;

  @media (max-width: 1086px) {
    font-size: 1.2rem;
  }

  @media (max-width: 960px) {
    font-size: 1rem;
  }
`;

export const RemoveButton = styled.button`
  cursor: pointer;
  padding: 0.5rem;
  background: rgba(255, 118, 0, 0.1);
  color: ${({ theme }) => theme.colors.primary500};
  transition: background 0.2s;
  border-radius: 8px;
  border: 0;


  &:hover {
    background: rgba(255, 118, 0, 0.2);
  }
`;

export const AdditionalButtonsContainer = styled.div`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.gray100};
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  button {
    padding: 0.2rem;
    border: none;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.gray100};
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

`;

export const PaymentDetails = styled.div`
  width: 30%;
  height: 50%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;



  button {
    padding: 0.75rem 1rem;
    border: none;
    background: ${({ theme }) => theme.colors.primary500};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    transition: filter 0.2s;

    &:not(:disabled):hover {
      cursor: pointer;
      filter: brightness(0.8);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    @media (max-width: 1285px) {
      width: 80%;
      margin: 0 auto;
    }
  }

  @media (max-width: 1285px) {
    width: 70%;
  }
`;

export const MonetaryValues = styled.div`
  display: flex;
  flex-direction: column;
 
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
  }

  div:not(:last-child) {
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
}
`;

export const BaseMonetaryValueLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-style: normal;
  line-height: 1.5rem; 
`;

export const MonetaryValueLabel = styled(BaseMonetaryValueLabel)`
  color: ${({ theme }) => theme.colors.gray500};
  font-weight: 400;
`;

export const MonetaryValue = styled(BaseMonetaryValueLabel)`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;

`;

export const FreeShippingValue = styled(BaseMonetaryValueLabel)`
  color: ${({ theme }) => theme.colors.green100};
  font-weight: 500;
`;
