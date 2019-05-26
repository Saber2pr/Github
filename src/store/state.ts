export interface State {
  userId: string
  error: {
    status: number
    statusText: string
    message: string
  }
}

export const State: State = {
  userId: 'saber2pr',
  error: {
    status: -1,
    statusText: '',
    message: ''
  }
}
