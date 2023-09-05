import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 309px;
  max-height: 658px;
  text-decoration: none;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  a {
    img {
      max-width: 100%;
      border-radius: 8px;
    }

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }

  }

  button {
    cursor: pointer;
    border: none;
    display: flex;
    padding: 0.75rem 2rem;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: rgba(255, 118, 0, 0.1);
    color: ${({ theme }) => theme.colors.primary500};
    transition: background 0.2s;


    &:hover {
      background: rgba(255, 118, 0, 0.2);
    }
  }

`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    color: ${({ theme }) => theme.colors.gray500};
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  } 

  span:last-child {
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.5rem;
  }

`;
