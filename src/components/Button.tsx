import palette from 'style/palette'
import { styled } from 'styled-components'

const Button = styled.button`
  background-color: ${palette.gray_100};
  width: 100%;
  height: 30px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid ${palette.gray_90};
  font-size: 12px;
`

export default Button
