import { action, makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import { IUiStore } from '../interfaces'

enableStaticRendering(typeof window === 'undefined')

export class UiStore implements IUiStore {
  input = ''

  constructor() {
    makeAutoObservable(this)
  }

  @action userInput = (input) => {
    console.log(input)
    this.input = input
  }

  @action hydrate = (data) => {
    if (!data) return
    Object.keys(data).forEach(k => {
      this[k] = data[k]
    })
  }
}
