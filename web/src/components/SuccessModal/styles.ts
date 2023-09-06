import * as Dialog from '@radix-ui/react-dialog';
import { styled } from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);

`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  outline: none;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};

  transition: color 0.2s; 

  &:hover {
    color: red;
  }

`;

export const Title = styled(Dialog.Title)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.primary500};

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray500};
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;

export const Content = styled(Dialog.Content)`
  width: 24rem;
  border-radius: 6px;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 80%;
    padding: 0.5rem 1rem;
  }
 
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 2.25rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary500};
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  transition: filter 0.2s;

  &:not(:disabled):hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }

`;

export const MaskGroupImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem; 
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  text-align: center;

  span:first-child {
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem; 
  }

  span:last-child {
    color: ${({ theme }) => theme.colors.gray500};
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 0.25rem; 
    span:first-child {
      font-size: 1rem;
    }
    span:last-child {
      font-size: 0.75rem;
    }
  }

`;
