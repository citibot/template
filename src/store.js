/**
 * svelte store wrapper around redux bundler
 *
 * this wrapper exposes three consts
 *
 * store - a svelte store adapter
 *
 * reduxStore - redux store
 *
 * select function that can be used 
 * to select state from redux
 *
 */
import createStore from './bundles'

const reduxstore = createStore({})

function adapter(reduxstore) {
  return {
    subscribe(fn) {
      return reduxstore.subscribe(() => {
        fn(reduxstore.getState())
      })
    }
  }
}

export const store = adapter(reduxstore)
export const reduxBundler = reduxstore
