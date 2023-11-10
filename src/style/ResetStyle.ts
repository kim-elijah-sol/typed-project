import { createGlobalStyle } from 'styled-components'

const ResetStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  button,
  input {
    border: 0;
    appearance: none;
    background-color: transparent;
  }

  button {
    cursor: pointer;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }
`
export default ResetStyle
