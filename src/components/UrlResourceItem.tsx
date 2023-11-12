import { UrlResource } from 'state/useResourceStore'
import S from 'style/styled'
import { TypedIcon } from 'typed-design-system'

interface Props extends UrlResource {
  id: number
}

function UrlResourceItem({ url }: Props) {
  return (
    <S.ResourceItem>
      <S.ResourceItemTop>{url}</S.ResourceItemTop>
      <S.ResourceItemBottom>
        <S.IconButton>
          <TypedIcon icon='edit_19' size={19} />
        </S.IconButton>
        <S.IconButton>
          <TypedIcon icon='trash_19' size={19} />
        </S.IconButton>
      </S.ResourceItemBottom>
    </S.ResourceItem>
  )
}

export default UrlResourceItem
