export const throttle = (callback: Function, delta = 300) => {
  clearTimeout(callback['throttle'])
  callback['throttle'] = setTimeout(callback, delta)
}
