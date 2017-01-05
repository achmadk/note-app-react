import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'

import store from 'reducers/index'

export default class AppSegment extends Component {
  render() {
    return (
      <AppContainer>
      	<Provider store={store}>
        	{this.props.children}
      	</Provider>
      </AppContainer>
    )
  }
}
