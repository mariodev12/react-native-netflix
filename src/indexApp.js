import React, {Component} from 'react'
import {
    Navigator
} from 'react-native'

import App from './app'
import Search from './components/Search'
import Details from './components/Details'
import Video from './components/VideoPlayerView'
import EpisodesPicker from './components/EpisodesPicker'
import {StackNavigator} from 'react-navigation'

const IndexApp = StackNavigator({
    Home: {screen: App},
    Details: {screen: Details},
    Search: {screen: Search},
    Video: {screen: Video},
    EpisodesPicker: {screen: EpisodesPicker}
},{
    headerMode: 'screen',
})

export default IndexApp