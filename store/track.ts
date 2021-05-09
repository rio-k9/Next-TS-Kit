import { action, makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import { IHydrate, ITrackStore } from '../interfaces'

enableStaticRendering(typeof window === 'undefined')

export class TrackStore implements ITrackStore {
  input: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  @action userInput = (input: string): void => {
    console.log(input)
    this.input = input
  }

  @action hydrate = (data: ITrackStore | undefined): void => {
    if (!data) return
    this.input = data.input
  }
}
