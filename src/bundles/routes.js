import { createRouteBundle } from 'redux-bundler'

import Start from '../pages/Start.html'
import About from '../pages/About.html'

export default createRouteBundle({
  '/': Start,
  '/about': About
})

