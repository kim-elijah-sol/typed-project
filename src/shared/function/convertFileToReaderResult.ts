export async function convertFileToReaderResult(
  file: File
): Promise<FileReader['result']> {
  return new Promise<FileReader['result']>((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      resolve(reader.result)
    }

    reader.onerror = () => {
      reject(new Error('파일을 읽는데 실패했어요.'))
    }

    reader.readAsDataURL(file)
  })
}
