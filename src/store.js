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
import { readable } from 'svelte/store'
import createStore from './bundles'

const reduxstore = createStore({})

export const store = readable(reduxstore.selectAll(), function (set) {
   reduxstore.subscribe(() => {
     set(reduxstore.selectAll())
   })
})

export const action = name => (...args) => {
  return reduxstore[name](...args)
}
