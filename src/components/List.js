import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native'

import Orientation from 'react-native-orientation'
var data = require('../data.json')
import { getTwoItems, getListDetail } from '../api/api'


class List extends Component {
    componentWillMount() {
        Orientation.lockToPortrait()
    }
    
    _renderItem(item){
        console.log(this.props)
        const {navigate} = this.props.navigation
        return (
            <TouchableWithoutFeedback onPress={() => navigate('Details', {item: item, navigation: this.props.navigation})}>
                <Image style={{width: 120, height: 180}} source={{uri: item.image}}/>
            </TouchableWithoutFeedback>
        )
    }

    render(){
        console.log(this.props)
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>My List</Text>
                    <FlatList
                        horizontal
                        SeparatorComponent={() => <View style={{width: 5}} />}
                        renderItem={({item}) => this._renderItem(item)} 
                        data={getTwoItems[0]}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Top Picks For You</Text>
                    <FlatList
                        horizontal
                        SeparatorComponent={() => <View style={{width: 5}} />}
                        renderItem={({item}) => this._renderItem(item)} 
                        data={getTwoItems[1]}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
})

export default List