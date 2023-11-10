import palette from 'style/palette'
import { styled, css } from 'styled-components'

interface ActiveProps {
  active?: boolean
}

function ResourceItem(props: React.HTMLAttributes<HTMLElement> & ActiveProps) {
  return <StyledResourceItem {...props} />
}

const StyledResourceItem = styled.li<ActiveProps>`
  height: 90px;
  background-color: ${palette.gray_100};
  padding: 10px;
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.21s;
  outline: 1px solid transparent;

  &:hover {
    outline-color: #ccc;
  }

  ${(props) =>
    props.active &&
    css`
      outline-color: ${palette.system_blue} !important;
    `}
`

ResourceItem.Top = styled.p`
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

ResourceItem.Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`

export default ResourceItem
