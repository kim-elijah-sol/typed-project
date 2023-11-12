const ALLOWED_IMAGE_EXTENSION = ['image/jpeg', 'image/jpg', 'image/png']

export function checkImageExtension({ type }: File) {
  if (ALLOWED_IMAGE_EXTENSION.includes(type) === false) {
    throw new Error('이미지 파일만 업로드 가능합니다.')
  }
}
