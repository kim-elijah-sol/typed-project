import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import { shallow } from 'zustand/shallow'
import useResourceStore, { UrlResource } from 'state/useResourceStore'
import S from 'style/styled'
import { TypedIcon } from 'typed-design-system'
import React, { useEffect, useRef, useState } from 'react'
import useUserSubmitAction from 'hooks/useUserSubmitAction'
import { updateUrlResource } from 'remote/updateUrlResource'

interface Props extends UrlResource {
  id: number
}

function UrlResourceItem({ id, url }: Props) {
  const $input = useRef<HTMLInputElement>(null)

  const [isEditing, setIsEditing] = useState(false)

  const { editResource, selectedResourceId, setSelectedResourceId } =
    useResourceStore(
      (state) => ({
        editResource: state.editResource,
        selectedResourceId: state.selectedResourceId,
        setSelectedResourceId: state.setSelectedResourceId,
      }),
      shallow
    )

  const updateUrlResourceMutation = useMutation({
    mutationFn: updateUrlResource,
    onSuccess: (url: string) => {
      editResource(id, { url })
      toast.success('URL 리소스가 수정되었어요.')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    onSettled: () => {
      setIsEditing(false)
    },
  })

  const userSubmitAction = useUserSubmitAction(handleEditSubmit)

  function handleEditSubmit() {
    if (updateUrlResourceMutation.isPending) return

    if ($input.current === null) return

    if ($input.current.value.trim().length === 0) {
      toast.error('URL을 입력해주세요.')
      return
    }

    if ($input.current.value.trim() === url) {
      setIsEditing(false)
      return
    }

    updateUrlResourceMutation.mutate($input.current.value.trim())
  }

  function handleClickEdit(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    setIsEditing(true)
  }

  useEffect(() => {
    if (isEditing) {
      $input.current?.focus()
    }
  }, [isEditing])

  return (
    <S.ResourceItem
      active={selectedResourceId === id}
      onClick={() => setSelectedResourceId(id)}
    >
      {isEditing ? (
        <S.Input ref={$input} defaultValue={url} {...userSubmitAction} />
      ) : (
        <S.ResourceItemTop>{url}</S.ResourceItemTop>
      )}
      <S.ResourceItemBottom>
        <S.IconButton onClick={handleClickEdit}>
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
