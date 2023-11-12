export function getRandomSuccess(percentage: number): boolean {
  const random = Math.random() * 100

  return random <= percentage
}
