import styled from 'styled-components'

const danger = '#ff4444'

export const Select = styled.select`
  width: 200px;
  height: 60px;

  margin: 5px;
  outline: 0;
  padding: 10px;

  border-radius: 4px;

  background-color: var(--text);
`

export const Input = styled.input`
  width: 200px;
  height: 60px;

  margin: 5px;
  outline: 0;
  padding: 10px;

  border-radius: 4px;

  background-color: var(--text);

`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  width: 420px;
`

export const Button = styled.button`
  padding: 10px;
  background-color: ${props => props.color === 'danger' ? danger : "var(--success)"};

  margin-left: 4px;
  color: var(--text);
  cursor: pointer;

  &:disabled {
    opacity: .7;
    pointer-events: none;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${props => props.color === 'danger' ? "#c00" : "#007e33"};
  }
`

export const Buttons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`