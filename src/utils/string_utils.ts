export function stringBlank(string: string) {
  string = string?.trim()
  if (string) {
    return false
  }
  return true
}
