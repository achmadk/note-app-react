import {getLocation} from 'actions/location'
import initRouter from 'modules/router'

import store from 'reducers/index'

import 'framework7'

require.ensure([], require => {
	require(`framework7/dist/css/framework7.material.min.css`)
	require(`framework7/dist/css/framework7.material.colors.min.css`)
	require('assets/css-preprocessors/app.less')
	require('ionicons/dist/scss/ionicons.scss')
}, "styles" )

initRouter();

store.dispatch(getLocation())

// export var F7 = new Framework7({
var f7 = new Framework7({
    modalTitle: 'Note App React',
    material: true,
    animateNavBackIcon: true,
    pushState: true,
    scrollTopOnStatusbarClick: true,
    uniqueHistoryIgnoreGetParameters: true,
    allowDuplicateUrls: true
})

window.f7 = f7

var main = f7.addView('.view-main')

window.main = main
