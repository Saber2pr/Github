export interface State {
  userId: string
  error: {
    status: number
    statusText: string
    message: string
  }
  usersForm: {
    title: string
    url: string
  }
}

export const State: State = {
  userId: 'saber2pr',
  error: {
    status: -1,
    statusText: '',
    message: ''
  },
  usersForm: {
    title: 'usersForm',
    url: '#'
  }
}
