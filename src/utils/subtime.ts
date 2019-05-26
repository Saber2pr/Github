export const timeDelta = (time1: string, time2: string) => {
  const Time1 = new Date(time1).getTime()
  const Time2 = new Date(time2).getTime()

  const hours = Math.round((Time1 - Time2) / 1000 / 60 / 60)

  const days = Math.round(hours / 24)

  if (days > 0) {
    return `${days}days, ${hours} hours ago.`
  } else {
    return `${hours} hours ago.`
  }
}
