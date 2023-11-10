import { styled } from 'styled-components'
import ShadowTop from './ShadowTop'

function Aside(props: React.HTMLAttributes<HTMLElement>) {
  return <StyledAside {...props} />
}

const StyledAside = styled.aside`
  width: 280px;
  height: 100%;
  border-right: 1px solid #c4c4c4;
`

Aside.Top = styled(ShadowTop)`
  display: flex;
  gap: 10px;
  padding: 10px;
`

export default Aside
