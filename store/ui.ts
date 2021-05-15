import { fullpageApi } from '@fullpage/react-fullpage'
import { action, computed, makeAutoObservable, autorun } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import { IUiStore } from '../types'

enableStaticRendering(typeof window === 'undefined')

export class UiStore implements IUiStore {
  input: string = ''
  fc?: fullpageApi
  activeSlide: number = 0
  logoActive = false
  buttonsActive = {
    hero: true,
    about: false,
  }

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

  @action setFc = (fullpageApi: fullpageApi) => {
    this.fc = fullpageApi
  }

  @action setLogoState = (bool) => {
    this.logoActive = bool
  }

  @action setButtonState = (i: number) => {
    const n = i
    if (n === 1) {
      this.buttonsActive.hero = false
      setTimeout(() => {
        this.buttonsActive.about = true
      }, 1000)
    }
    else {
      this.buttonsActive.hero = (n === 0)
      this.buttonsActive.about = (n === 1)
    }
  }

  @action setActiveSlide = (i: number) => {
    if (i === 0) {
      this.buttonsActive.hero = true
    }
    else if (i === 1) {
      this.buttonsActive.about = true
    }
    this.activeSlide = i
  }

  @action moveTo = (i: number) => {
    this.setButtonState(i - 1)
    setTimeout(() => {
      this.fc?.moveTo(i)
    }, 1000)

  }

}
