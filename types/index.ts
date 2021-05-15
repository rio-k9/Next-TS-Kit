import { fullpageApi } from "@fullpage/react-fullpage";

export interface ITrackStore {
  input: string,
  userInput: Function,
  hydrate: Function
}

export interface IUiStore {
  input: string,
  activeSlide: number,
  fc?: fullpageApi,
  buttonsActive: {
    hero: boolean,
    about: boolean
  },
  userInput: Function,
  hydrate: Function,
  setFc: Function,
  setActiveSlide: Function,
  moveTo: Function
}

export interface IRootStore {
  uiStore: IUiStore,
  trackStore: ITrackStore,
  hydrate: Function
}

export interface IHydrate {
  uiStore: IUiStore | null,
  trackStore: ITrackStore | null
}