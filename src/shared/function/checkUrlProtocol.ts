export function checkUrlProtocol(url: string) {
  if (
    url.startsWith('https://') !== true &&
    url.startsWith('http://') !== true
  ) {
    throw new Error('URL 은 http:// 또는 https:// 로 시작해야 해요.')
  }
}
