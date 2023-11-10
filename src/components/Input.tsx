import palette from 'style/palette'
import { styled } from 'styled-components'

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 8px;
  background-color: ${palette.gray_97};
  border: 1px solid ${palette.system_blue};
  border-radius: 3px;
  font-size: 14px;
`

export default Input
