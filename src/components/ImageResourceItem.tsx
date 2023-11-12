import { ImageResource } from 'state/useResourceStore'
import S from 'style/styled'
import { TypedIcon } from 'typed-design-system'

interface Props extends ImageResource {
  id: number
}

function ImageResourceItem({ fileName }: Props) {
  return (
    <S.ResourceItem>
      <S.ResourceItemTop>{fileName}</S.ResourceItemTop>
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

export default ImageResourceItem
