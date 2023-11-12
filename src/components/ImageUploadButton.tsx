import { useRef } from 'react'
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import S from 'style/styled'
import { createImageResource } from 'remote/createImageResource'
import useResourceStore from 'state/useResourceStore'

function ImageUploadButton() {
  const $input = useRef<HTMLInputElement>(null)

  const addResource = useResourceStore((state) => state.addResource)

  const createImageResourceMutation = useMutation({
    mutationFn: createImageResource,
    onSuccess: (imageResource) => {
      addResource(imageResource)
      toast.success('이미지 리소스가 추가되었어요.')
    },
  })

  async function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { files } = e.target

    if (!files) return

    const fileArray = Array.from(files)

    for (const file of fileArray) {
      await createImageResourceMutation.mutateAsync(file).catch((error) => {
        toast.error(error.message)
      })
    }
  }

  return (
    <>
      <S.Button onClick={() => $input.current?.click()}>이미지 추가</S.Button>
      <input
        ref={$input}
        type='file'
        multiple
        accept='image/jpg, image/jpeg, image/png'
        style={{
          display: 'none',
        }}
        onChange={handleChangeInput}
      />
    </>
  )
}

export default ImageUploadButton
