import React, {Component} from 'react'
import {Text,View, StyleSheet, FlatList, TouchableWithoutFeedback, Image, ActivityIndicator} from 'react-native'

import {fetchData} from '../actions'
import {connect} from 'react-redux'

import {replaceHttps} from '../lib'

class Genres extends Component {
    
    componentWillMount () {
        const {item} = this.props
        this.props.fetchData(item)
    }

    shouldComponentUpdate (nextProps, nextState) {
        const {item} = this.props
        if(JSON.stringify(item) !== JSON.stringify(nextProps.item)){
            this.props.fetchData(nextProps.item)
        }
        return true
    }

    renderItem(item){
        const {navigate} = this.props.navigation
        return (
            <TouchableWithoutFeedback
                onPress={() => navigate('Details', {item})}
            >
                <Image style={styles.image} source={{uri: replaceHttps(item.image)}} />
            </TouchableWithoutFeedback>
        )
    }

    renderList(){
        const {data} = this.props.data
        return (
            <FlatList 
                data={data}
                style={{flex: 1}}
                numColumns={3}
                renderItem={({item}) => this.renderItem(item)}
                keyExtractor={item => item.id}
            />
        )
    }

    renderActivityIndicator(){
        const {activityIndicatorContainer} = styles
        return (
            <View style={activityIndicatorContainer}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    
    render(){
        const {isFetching} = this.props.data
        return (
            <View style={{flex: 1}}>
                {isFetching ? this.renderActivityIndicator() : this.renderList()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 170
    },
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: 'center'
    }
})

//mapStateToProps
const mapStateToProps = state => {
    return {data: state.data}
}

//mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        fetchData: (genres) => dispatch(fetchData(genres))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Genres)