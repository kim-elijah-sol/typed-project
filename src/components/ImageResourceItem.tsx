import { shallow } from 'zustand/shallow'
import useResourceStore, { ImageResource } from 'state/useResourceStore'
import S from 'style/styled'
import { TypedIcon } from 'typed-design-system'

interface Props extends ImageResource {
  id: number
}

function ImageResourceItem({ id, fileName }: Props) {
  const { selectedResourceId, setSelectedResourceId } = useResourceStore(
    (state) => ({
      selectedResourceId: state.selectedResourceId,
      setSelectedResourceId: state.setSelectedResourceId,
    }),
    shallow
  )

  return (
    <S.ResourceItem
      active={selectedResourceId === id}
      onClick={() => setSelectedResourceId(id)}
    >
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
