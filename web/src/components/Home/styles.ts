import { styled } from 'styled-components';

export const Container = styled.main`
  margin-top: -1px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 2rem;

  @media (max-width: 1285px) {
    margin-top: 2rem;
  }  
`;

export const Hero = styled.div`
  display: flex;


  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.primary500};
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Poppins', sans-serif;
    font-size: 2.375rem;
    font-weight: 600;
    line-height: 4rem;
    padding: 1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  
  img {
    max-width: 100%; 
    height: auto;
  }


  @media (max-width: 1285px) {
    display: none;
  }
  
`;

export const ProductsContainerWrapper = styled.div`
  display: flex;
  justify-content: center; 
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
