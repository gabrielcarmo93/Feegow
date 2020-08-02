import styled from 'styled-components'

export const Button = styled.button`
  outline: 0;
  padding: 10px 16px;
  background-color: var(--success);
  border-radius: 16px;
  color: var(--text);
  cursor: pointer;

  &:disabled {
    opacity: .7;
    cursor: not-allowed;
  }
`