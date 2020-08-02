import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:   sans-serif;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }
  
  *, button, input {
    border: 0;
    background: none;
    font-family: --apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu,  Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  input {
    ::placeholder {
      color: var(--placeholder);
    }
  }

  :root {
    --background: #4C9AD8;
    --text: #F4F9FC;
    --placeholder: #D5D5D5;
    --success: #6AC36F;
  }
`

export default GlobalStyle