export namespace Base64 {
  export function encode(text: string) {
    return btoa(text)
  }

  export function decode(text: string) {
    return atob(text)
  }
}
