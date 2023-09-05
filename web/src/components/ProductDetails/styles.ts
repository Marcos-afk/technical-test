import { styled } from 'styled-components';

export const Container = styled.main`
  display: flex;
  margin-top: 3rem;
  padding: 0 6.5rem;

  @media (max-width: 1086px) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
  }
`;

export const Preview = styled.div`
  flex: 1;
  display: flex;
  gap: 1.5rem;

  @media (max-width: 465px) {
    flex-direction: column;
  }

  img {
    border-radius: 8px;
    max-width: 100%;
  }

`;

export const Details = styled.div`
  flex: 1;
  padding: 1rem;
  margin-top: 2.688rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  button {
    cursor: pointer;
    display: flex;
    padding: 0.75rem 1rem;
    justify-content: center;
    align-items: center;
    border: none;
    background: ${({ theme }) => theme.colors.primary500};
    border-radius: 6px;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    @media (max-width: 1086px) {
      width: 80%;
      margin: 0 auto;
    }

  }
`;

export const Description = styled.span`
  font-size: 1.75rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.black};

`;

export const Price = styled.span`
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: normal;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const PaymentInformation = styled.div`
  width: 50%;
  background: ${({ theme }) => theme.colors.gray050};
  color: ${({ theme }) => theme.colors.primary500};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem 3rem;
  border-radius: 8px;
`;
