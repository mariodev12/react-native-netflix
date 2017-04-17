import React, {Component} from 'react'
import {
    Navigator
} from 'react-native'

import App from './app'
import Search from './components/Search'
import Details from './components/Details'
import Video from './components/VideoPlayerView'
import {StackNavigator} from 'react-navigation'

const IndexApp = StackNavigator({
    Home: {screen: App},
    Details: {screen: Details},
    Search: {screen: Search},
    Video: {screen: Video}
},{
    headerMode: 'screen',
})

export default IndexApp