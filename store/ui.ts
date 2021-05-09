import { action, makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import { IUiStore } from '../interfaces'

enableStaticRendering(typeof window === 'undefined')

export class UiStore implements IUiStore {
  input: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  @action userInput = (input: string): void => {
    this.input = input
  }

  @action hydrate = (data: IUiStore | undefined): void => {
    if (!data) return
    this.input = data.input
  }
}
