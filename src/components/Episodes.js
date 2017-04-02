import React, {Component} from 'react'
import {View,Text, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
class Episodes extends Component{
    renderEpisodes(){
        const res = this.props.episodes.map((item, i) => {
            const img = item.image == null ? 'https://static.tvmaze.com/uploads/images/medium_landscape/76/190262.jpg': item.image.medium
            return (
                <View style={styles.video} key={i}>
                    <View style={styles.videoEpisode}>
                        <Image style={styles.image} source={{uri: img}}>
                            <View style={styles.buttonPlay}>
                                <TouchableWithoutFeedback>
                                    <View style={{backgroundColor: 'transparent'}}>
                                        <Icon 
                                            style={styles.iconPlay}
                                            name="play-circle"
                                            size={30}
                                            color="white"
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </Image>
                        <View style={styles.episodeName}>
                            <Text style={styles.text}>{item.number}. {item.name}</Text>
                            <Text style={styles.text}>{item.runtime}</Text>
                        </View>
                    </View>
                    <Text style={styles.summary}>{item.summary}</Text>
                </View>
            )
        })
        return res
    }
    render(){
        return (
            <View style={styles.container}>
                {this.renderEpisodes()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    image: {
        width: 150,
        height: 80,
        marginRight: 10
    },
    buttonPlay: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    episodeName:{
        justifyContent: 'center'
    },
    videoEpisode: {
        flexDirection: 'row'
    },
    text: {
        color: 'white'
    },
    summary: {
        color: 'grey',
        marginVertical: 10
    }
})

export default Episodes