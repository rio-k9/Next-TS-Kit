import { fullpageApi } from "@fullpage/react-fullpage";

export interface ITrackStore {
  input: string,
  userInput: Function,
  hydrate: Function
}

export interface IUiStore {
  input: string,
  userInput: Function,
  hydrate: Function
}

export interface IRootStore {
  uiStore: IUiStore,
  trackStore: ITrackStore,
  hydrate: Function,
}

export interface IHydrate {
  uiStore: IUiStore | null,
  trackStore: ITrackStore | null
}

export interface IHeader extends JSX.Element {
  fp: fullpageApi
}