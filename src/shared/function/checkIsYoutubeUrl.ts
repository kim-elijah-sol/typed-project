export function checkIsYoutubeUrl(url: string): boolean {
  return url.startsWith('https://www.youtube.com/watch?v=')
}
