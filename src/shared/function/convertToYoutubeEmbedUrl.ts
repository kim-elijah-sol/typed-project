import { checkIsYoutubeUrl } from './checkIsYoutubeUrl'

export function convertToYoutubeEmbedUrl(url: string): string {
  if (checkIsYoutubeUrl(url) === false) {
    throw new Error('유튜브 URL 이 아니에요.')
  }

  const videoId = url.split('v=')[1]

  return `https://www.youtube.com/embed/${videoId}`
}
