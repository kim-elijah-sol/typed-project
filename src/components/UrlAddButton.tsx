import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import useUserSubmitAction from 'hooks/useUserSubmitAction'
import { useEffect, useRef, useState } from 'react'
import { createUrlResource } from 'remote/createUrlResource'
import useResourceStore from 'state/useResourceStore'
import S from 'style/styled'

function UrlAddButton() {
  const $input = useRef<HTMLInputElement>(null)

  const [isUrlInputVisible, setIsUrlInputVisible] = useState(false)

  const userSubmitAction = useUserSubmitAction(handleSubmit)

  const addResource = useResourceStore((state) => state.addResource)

  const createUrlResourceMutation = useMutation({
    mutationFn: createUrlResource,
    onSuccess: (urlResource) => {
      addResource(urlResource)
      setIsUrlInputVisible(false)
      toast.success('URL 리소스가 추가되었어요.')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  function handleSubmit() {
    if (createUrlResourceMutation.isPending) return

    if ($input.current === null) return

    if ($input.current.value.trim().length === 0) {
      setIsUrlInputVisible(false)
      return
    }

    createUrlResourceMutation.mutate($input.current.value.trim())
  }

  useEffect(() => {
    if (isUrlInputVisible) {
      $input.current?.focus()
    }
  }, [isUrlInputVisible])

  return (
    <S.UrlAddButtonWrapper>
      <S.Button onClick={() => setIsUrlInputVisible(true)}>URL 추가</S.Button>
      {isUrlInputVisible && (
        <S.UrlInputWrapper>
          <S.Input
            ref={$input}
            placeholder='URL을 입력해주세요.'
            disabled={createUrlResourceMutation.isPending}
            {...userSubmitAction}
          />
        </S.UrlInputWrapper>
      )}
    </S.UrlAddButtonWrapper>
  )
}

export default UrlAddButton
