import {
  checkImageExtension,
  getRandomSuccess,
  randomDelay,
} from 'shared/function'
import { convertFileToReaderResult } from 'shared/function/convertFileToReaderResult'
import { ImageResource } from 'state/useResourceStore'

export async function createImageResource(file: File): Promise<ImageResource> {
  checkImageExtension(file)

  await randomDelay(300, 1000)

  const isSuccess = getRandomSuccess(80)

  if (!isSuccess) {
    throw new Error('이미지 리소스를 생성하는데 실패했어요.')
  }

  const result = await convertFileToReaderResult(file)

  if (result === null) {
    throw new Error('이미지 리소스를 생성하는데 실패했어요.')
  }

  return {
    type: 'image',
    fileName: file.name,
    src: result.toString(),
  }
}
