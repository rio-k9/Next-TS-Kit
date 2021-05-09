import { Context, createContext, ReactNode, useContext } from 'react'
import { UiStore } from './ui'
import { TrackStore } from './track'
import { IHydrate, IRootStore } from '../interfaces';
import { NextPage } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';

let store: undefined | IRootStore

class RootStore implements IRootStore {
  uiStore;
  trackStore
  constructor() {
    this.uiStore = new UiStore()
    this.trackStore = new TrackStore()
  }
  hydrate = (data: IHydrate) => {
    if (data.uiStore) this.uiStore.hydrate(data.uiStore)
    if (data.trackStore) this.trackStore.hydrate(data.trackStore)
  }

}
export const StoreContext: Context<IRootStore | undefined> = createContext(store)

export function useStore() {
  const context: IRootStore | undefined = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}

export function StoreProvider({ children, initialData }: AppProps) {
  const store: IRootStore = initializeStore(initialData)
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

function initializeStore(initialData: IHydrate | undefined) {
  const _store: IRootStore = store ?? new RootStore()
  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (initialData) _store.hydrate(initialData)
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}
