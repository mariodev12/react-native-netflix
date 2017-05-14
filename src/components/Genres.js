import React, {Component} from 'react'
import {Text,View, StyleSheet} from 'react-native'

import {fetchData} from '../actions'
import {connect} from 'react-redux'

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
    
    render(){
        console.log(this.props)
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Text>{this.props.item}</Text>
            </View>
        )
    }
}

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