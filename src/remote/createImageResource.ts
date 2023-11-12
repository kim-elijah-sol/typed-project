import {
  checkImageExtension,
  getRandomSuccess,
  randomDelay,
} from 'shared/function'
import { ImageResource } from 'state/useResourceStore'

export async function createImageResource(file: File): Promise<ImageResource> {
  checkImageExtension(file)

  await randomDelay(300, 1000)

  const isSuccess = getRandomSuccess(80)

  if (!isSuccess) {
    throw new Error('이미지 리소스를 생성하는데 실패했어요.')
  }

  return new Promise<ImageResource>((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      const src = reader.result?.toString()

      if (src) {
        resolve({
          type: 'image',
          fileName: file.name,
          src,
        })
      } else {
        reject(new Error('이미지 리소스를 생성하는데 실패했어요.'))
      }
    }

    reader.onerror = () => {
      reject(new Error('이미지 리소스를 생성하는데 실패했어요.'))
    }

    reader.readAsDataURL(file)
  })
}
