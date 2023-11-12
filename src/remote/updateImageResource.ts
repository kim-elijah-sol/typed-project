import { checkImageExtension } from 'shared/function'
import { convertFileToReaderResult } from 'shared/function/convertFileToReaderResult'
import { ImageResource } from 'state/useResourceStore'

export async function updateImageResource(
  file: File
): Promise<Omit<ImageResource, 'type'>> {
  checkImageExtension(file)

  const result = await convertFileToReaderResult(file)

  if (result === null) {
    throw new Error('이미지 리소스를 생성하는데 실패했어요.')
  }

  return {
    fileName: file.name,
    src: result.toString(),
  }
}
