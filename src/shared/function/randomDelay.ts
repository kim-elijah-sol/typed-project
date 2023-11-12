export function randomDelay(min: number, max: number): Promise<null> {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (max - min + 1) + min)

    setTimeout(() => {
      resolve(null)
    }, delay)
  })
}
