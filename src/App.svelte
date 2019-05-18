<script>
  import { setContext } from 'svelte'
  import { action, store } from './store'
  import navHelper from './lib/nav-helper'
  import Start from './pages/Start.html'
  
  const { doUpdateUrl, selectRoute } = reduxBundler 
  setContext('store', store)
  setContext('action', action)
  // watch for new redux events
  // set page to route
  //
  // want to add a page to the app
  // see src/bundles/routes.js
  //
  let page = selectRoute()
  store.subscribe(() => {
    page = selectRoute()
  })

</script>
<div on:click={navHelper(doUpdateUrl)}>
  <svelte:component this={page} />
</div>
<style>
  :global(body) {
    height: 100vh;
  }
  div {
    height: 100%;
  }
</style>
