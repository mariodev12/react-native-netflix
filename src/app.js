import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import Header from './components/Header'
import List from './components/List'
import Menu from './components/Menu'
import Slide from './components/Slider'

import SideMenu from 'react-native-side-menu'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    updateMenu(isOpen){
        this.setState({isOpen})
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <SideMenu
                    menu={<Menu />}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                    style={{flex: 1}}
                >
                    <View style={[{flex: 1}, styles.container]}>
                        <Header navigator={this.props.navigator} toggle={this.toggle.bind(this)} />
                        <Slide />
                        <List navigator={this.props.navigator}/>
                    </View>
                </SideMenu>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
})

export default App