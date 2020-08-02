import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 700px;
  height: 100px;
  max-width: 60%;

  border: .6px solid var(--placeholder);
  border-Radius: 12px;
`

export const Label = styled.span`
  color: var(--text);
  font-size: 20px;
  font-weight: 500;
`

export const Select = styled.select`
  outline: 0;
  padding: 10px;

  border-radius: 4px;

  background-color: var(--text);
`

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