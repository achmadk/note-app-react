import React from 'react'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'

import store from 'reducers/index'

export default function AppSegment ({children}) {
  return (
    <AppContainer>
      <Provider store={store}>
        {children}
      </Provider>
    </AppContainer>
  )
}
