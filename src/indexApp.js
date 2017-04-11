import React, {Component} from 'react'
import { View, StyleSheet, Text } from 'react-native'

import App from './app'
import Search from './components/Search'
import Details from './components/Details'
import Video from './components/VideoPlayerView'

import { StackNavigator } from 'react-navigation'
import createHistory from 'history/createBrowserHistory'

const IndexApp = StackNavigator({
        Home: { screen: App },
        Details: {screen: Details},
        Search: {screen: Search},
        Video: {screen: Video}
    }, {
        initialRouteName: 'Home',
        headerMode: 'screen'
    }
)

/*
const IndexApp = () => (
  <NativeRouter>
    <Route history={createHistory}>
        <View style={styles.container}>
            <Route exact path="/" component={App} />
            <Route path="/search" component={Search} />
            <Route path="/:id" component={Details} />
            <Route path="/video" component={Video} />
        </View>
    </Route>
  </NativeRouter>
)
*/

export default IndexApp