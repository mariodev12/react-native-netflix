import React, {Component} from 'react'
import {
    Navigator
} from 'react-native'

import App from './app'
import Search from './components/Search'
import Details from './components/Details'
import Video from './components/VideoPlayerView'

import buildStyleInterpolator from 'buildStyleInterpolator'

const NoTransition = {
    opacity: {
        from: 1,
        to: 1,
        min: 1,
        max: 1,
        type: 'linear',
        extrapolate: false,
        round: 100
    }
}

class IndexApp extends Component {
    _renderScene(route, navigator){
        var navigator = {navigator}

        switch(route.ident){
            case 'App': 
                return (
                    <App {...navigator}/>
                )
            case 'Search':
                return (
                    <Search {...navigator}/>
                )
            case 'Details':
                return (
                    <Details {...navigator} {...route.passProps}/>
                )
            case 'Video':
                return (
                    <Video {...navigator} {...route.passProps}/>
                )
        }
    }
    _configureScene(route, routeStack){
        switch(route.ident){
            case 'Search':
                return {
                    ...Navigator.SceneConfigs.FloatFromLeft,
                        gestures: null,
                        defaultTransitionVelocity: 100,
                        animationInterpolators: {
                            into: buildStyleInterpolator(NoTransition),
                            out: buildStyleInterpolator(NoTransition)
                        }
                }
            case 'Details':
                return {
                    ...Navigator.SceneConfigs.FloatFromLeft,
                        gestures: null,
                        defaultTransitionVelocity: 100,
                        animationInterpolators: {
                            into: buildStyleInterpolator(NoTransition),
                            out: buildStyleInterpolator(NoTransition)
                        }
                }
            case 'Video':
                return {
                    ...Navigator.SceneConfigs.FloatFromLeft,
                        gestures: null,
                        defaultTransitionVelocity: 100,
                        animationInterpolators: {
                            into: buildStyleInterpolator(NoTransition),
                            out: buildStyleInterpolator(NoTransition)
                        }
                }
        }
    }
    render(){
        return (
            <Navigator 
                initialRoute={{ident: 'App'}}
                renderScene={this._renderScene}
                configureScene={this._configureScene}
            />
        )
    }
}

export default IndexApp