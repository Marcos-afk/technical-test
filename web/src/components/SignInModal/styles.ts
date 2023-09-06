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
  padding: 1.5rem 3rem;
  background: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2.438rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input:not(:nth-last-child(2)) {
      padding: 0.75rem;
      border: 1px solid ${({ theme }) => theme.colors.gray200};
      border-radius: 4px;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors.gray500};
        font-family: 'Inter', sans-serif;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; 
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem;
    
    form {
      margin-top: 1rem;
      
      input:not(:nth-last-child(2)) {
        padding: 0.5rem;
      }
    }
  }
`;

export const PasswordFieldContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 4px;
  
  input {
    width: 90%;
    padding: 0.75rem;
    border: none;

    &::placeholder {
        color: ${({ theme }) => theme.colors.gray500};
        font-family: 'Inter', sans-serif;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; 
      }

    &:focus {
      outline: none;
    }
  }


  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.primary500};
    transition: filter 0.2s;
    padding: 0.75rem 0;

    &:hover {
      filter: brightness(0.8);
    }
  }

`;

export const SubmitButton = styled.button`
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

`;
