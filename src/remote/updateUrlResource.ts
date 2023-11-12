import {
  checkIsYoutubeUrl,
  checkUrlProtocol,
  convertToYoutubeEmbedUrl,
} from 'shared/function'

export async function updateUrlResource(url: string): Promise<string> {
  checkUrlProtocol(url)

  if (checkIsYoutubeUrl(url)) {
    url = convertToYoutubeEmbedUrl(url)
  }

  return url
}
