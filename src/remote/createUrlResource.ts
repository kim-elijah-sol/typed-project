import {
  checkIsYoutubeUrl,
  checkUrlProtocol,
  convertToYoutubeEmbedUrl,
  getRandomSuccess,
  randomDelay,
} from 'shared/function'
import { UrlResource } from 'state/useResourceStore'

export async function createUrlResource(url: string): Promise<UrlResource> {
  checkUrlProtocol(url)

  if (checkIsYoutubeUrl(url)) {
    url = convertToYoutubeEmbedUrl(url)
  }

  await randomDelay(300, 1000)

  const isSuccess = getRandomSuccess(80)

  if (!isSuccess) {
    throw new Error('URL 리소스를 생성하는데 실패했어요.')
  }

  return {
    type: 'url',
    url,
  }
}
