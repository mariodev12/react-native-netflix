import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableHighlight
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

class EpisodesPicker extends Component {
    static navigationOptions = {
        headerVisible: false
    }
    goBack(){
        const {goBack} = this.props.navigation
        goBack()
    }

    saveSeason(item){
        const {goBack} = this.props.navigation
        this.props.navigation.state.params.getSeason(item.season)
        goBack()
    }

    _renderItem(item){
        const {currentSeason} = this.props.navigation.state.params
        if(currentSeason == item.season){
            return (
                <TouchableHighlight 
                    style={styles.row}
                    onPress={() => this.saveSeason(item)}>
                    <View style={styles.seasonChecked}>
                        <Text style={styles.textList}>Season {item.season}</Text>
                        <Icon 
                            name="check"
                            size={18}
                            color="white"
                        />
                    </View>
                </TouchableHighlight>
            )
        } else {
            return (
                <TouchableHighlight 
                    style={styles.row}
                    onPress={() => this.saveSeason(item)}>
                    <View>
                        <Text style={styles.textList}>Season {item.season}</Text>
                    </View>
                </TouchableHighlight>
            )
        }
    }

    createData(seasons){
        const data = []
        for(var i = 1; i<= seasons; i++){
            data.push({key: i, season: i})
        }
        return data
    }
    render(){
        const {seasons} = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.textTitle}>Seasons</Text>
                    </View>
                    <View style={styles.cancelButtonView}>
                        <TouchableWithoutFeedback onPress={() => this.goBack()}>
                            <View style={styles.containerButton}>
                                <Text style={styles.textCancel}>Cancel</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <FlatList 
                    style={{flex: 1}}
                    renderItem={({item}) => this._renderItem(item)}
                    data={this.createData(seasons)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    row: {
        paddingVertical: 20,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    textCancel: {color: '#f9f9f9', fontSize: 18},
    textList: {color: '#f9f9f9', fontSize: 18},
    textTitle: {color: 'white', fontSize: 21, fontWeight: '600'},
    header: {justifyContent: 'flex-end', alignItems: 'center', height: 60, backgroundColor: 'black', paddingBottom: 10},
    cancelButtonView: {position: 'absolute', right: 7, top: 25},
    seasonChecked: {flexDirection: 'row', justifyContent: 'space-between'}
})

export default EpisodesPicker