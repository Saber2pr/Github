import { Action } from '@saber2pr/redux'

interface PayloadAction<T, V> extends Action<T> {
  payload: V
}

export type updateUser = PayloadAction<'updateUser', string>

export type throwError = PayloadAction<
  'throwError',
  { status: number; statusText: string; message: string }
>
