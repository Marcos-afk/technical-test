import { styled } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  padding: 1.25rem 6.5rem;


  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.844rem;
    color: ${({ theme }) => theme.colors.primary500};
    transition: filter 0.2s;

    span {
      font-size: 0.875rem;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.gray500};
    }
    &:hover {
      filter: brightness(0.8);
    }

  }
`;
