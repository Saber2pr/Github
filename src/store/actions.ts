import { Action } from '@saber2pr/react-redux'

export namespace A {
  interface PayloadAction<T, V> extends Action<T> {
    payload: V
  }

  export type updateUser = PayloadAction<'updateUser', string>

  export type throwError = PayloadAction<
    'throwError',
    { status: number; statusText: string; message: string }
  >

  export type updateUserForm = PayloadAction<
    'updateUserForm',
    {
      title: string
      url: string
    }
  >
}
