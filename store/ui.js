import { action, makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'

enableStaticRendering(typeof window === 'undefined')

export class UiStore {
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

    this.lastUpdate = data.lastUpdate !== null ? data.lastUpdate : Date.now()
    this.light = !!data.light
  }
}
