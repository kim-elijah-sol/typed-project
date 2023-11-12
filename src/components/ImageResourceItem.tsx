import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import { shallow } from 'zustand/shallow'
import useResourceStore, { ImageResource } from 'state/useResourceStore'
import S from 'style/styled'
import { TypedIcon } from 'typed-design-system'
import { updateImageResource } from 'remote/updateImageResource'
import { useRef } from 'react'

interface Props extends ImageResource {
  id: number
}

function ImageResourceItem({ id, fileName }: Props) {
  const $input = useRef<HTMLInputElement>(null)

  const {
    editResource,
    removeResource,
    selectedResourceId,
    setSelectedResourceId,
  } = useResourceStore(
    (state) => ({
      editResource: state.editResource,
      removeResource: state.removeResource,
      selectedResourceId: state.selectedResourceId,
      setSelectedResourceId: state.setSelectedResourceId,
    }),
    shallow
  )

  const updateImageResourceMutation = useMutation({
    mutationFn: updateImageResource,
    onSuccess: ({ src, fileName }) => {
      editResource(id, { src, fileName })
      toast.success('이미지 리소스가 수정되었어요.')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  function handleClickEdit(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    $input.current?.click()
  }

  async function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { files } = e.target

    if (!files) return

    if (files.length === 0) return

    updateImageResourceMutation.mutate(files[0])
  }

  function handleClickRemove(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    removeResource(id)
    toast.success('이미지 리소스가 삭제되었어요.')
  }

  return (
    <>
      <S.ResourceItem
        active={selectedResourceId === id}
        onClick={() => setSelectedResourceId(id)}
      >
        <S.ResourceItemTop>{fileName}</S.ResourceItemTop>
        <S.ResourceItemBottom>
          <S.IconButton onClick={handleClickEdit}>
            <TypedIcon icon='edit_19' size={19} />
          </S.IconButton>
          <S.IconButton onClick={handleClickRemove}>
            <TypedIcon icon='trash_19' size={19} />
          </S.IconButton>
        </S.ResourceItemBottom>
      </S.ResourceItem>
      <input
        ref={$input}
        type='file'
        accept='image/jpg, image/jpeg, image/png'
        style={{
          display: 'none',
        }}
        onChange={handleChangeInput}
      />
    </>
  )
}

export default ImageResourceItem
