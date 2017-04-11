import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    Share
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import TabsEpisodes from './TabsEpisodes'
import * as Animatable from 'react-native-animatable'
import TextGradient from 'react-native-linear-gradient'
import Orientation from 'react-native-orientation'
import { getListDetail } from '../api/api'

const {width, height} = Dimensions.get('window')


class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            measures: 0,
            header: false,
            animation: '',
            data: null
        }
    }
    static navigationOptions = {
        header: {
            visible: false,
        }
    }
    componentWillMount() {
        Orientation.lockToPortrait()
    }

    onShare(){
        Share.share({
            title: 'Designated Survivor',
            url: 'www.youtube.com',
            message: 'Awesome Tv Show'
        }, {
            //android
            dialogTitle: 'Share this awesome content',
            //ios
            excludeActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ]
        })
    }

    handleScroll(event){
        if(event.nativeEvent.contentOffset.y > this.state.measures){
            this.setState({
                header: true,
                animation: 'slideInDown'
            })
        } else {
            this.setState({
                header: false
            })
        }
    }
    
    render(){
        const {params} = this.props.navigation.state
        const {navigate} = params.navigation
        const {episodes} = params.item.details
        const {name} = params.item
        const {thumbnail, cast, description, year, creator, numOfEpisodes, season} = params.item.details
        return (
            <View style={{flex: 1}}>
                {this.state.header ? <Animatable.View animation={this.state.animation} style={styles.header}>
                    <Text style={styles.headerText}>{name}</Text>
                </Animatable.View>: null}
                <ScrollView onScroll={this.handleScroll.bind(this)} style={styles.container}>
                    <Image 
                        style={styles.thumbnail}
                        source={{uri: thumbnail}}
                    >
                        <View style={styles.buttonPlay}>
                            <TouchableHighlight onPress={() => navigate('Video', {navigation: params})}>
                                <View>
                                    <Icon 
                                        style={styles.iconPlay}
                                        name="play-circle"
                                        size={90}
                                        color="white"
                                    />
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.nameContainer}
                            onLayout={({nativeEvent}) => {
                                this.setState({
                                    measures: nativeEvent.layout.y
                                })
                            }}
                        >
                            <TextGradient colors={['transparent', '#181818', '#181818']}>
                                <Text style={[styles.text, styles.titleShow]}>{name}</Text>
                            </TextGradient>
                        </View>
                    </Image>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.subtitle}>
                            <Text style={[styles.text, styles.subTitleText]}>{year}</Text>
                            <Text style={[styles.text, styles.subTitleText]}>{numOfEpisodes}</Text>
                            <Text style={[styles.text, styles.subTitleText]}>{season} Season</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={[styles.text, styles.light]}>{description}</Text>
                        </View>
                        <Text style={[styles.text]}>Cast: {cast}</Text>
                        <Text style={[styles.text]}>Creator: {creator}</Text>
                        <View style={styles.shareListIcons}>
                            <View style={styles.myListIcon}>
                                <IonIcons
                                    style={styles.listIcon} 
                                    name="md-checkmark"
                                    color="grey"
                                    size={25}
                                />
                                <Text style={styles.text}>My List</Text>
                            </View>
                            <TouchableHighlight onPress={this.onShare}>
                                <View style={styles.myShareIcon}>
                                    <Icon 
                                        style={styles.shareIcon}
                                        name="share-alt"
                                        color="grey"
                                        size={25}
                                    />
                                    <Text style={styles.text}>Share</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <TabsEpisodes data={episodes} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nameContainer: {
        backgroundColor: 'transparent'
    },
    header: {
        backgroundColor: '#181818',
        paddingVertical: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
    headerText: {
        color: 'white',
        fontSize: 20
    },
    titleShow: {
        fontSize: 35,
        paddingLeft: 10,
        marginBottom: 10,
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    thumbnail: {
        width: width,
        height: 300
    },
    buttonPlay: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    iconPlay: {
        opacity: 0.7,
        backgroundColor: 'transparent'
    },
    descriptionContainer: {
        paddingHorizontal: 20
    },
    subtitle: {
        flexDirection: 'row'
    },
    subTitleText: {
        marginRight: 20
    },
    text: {
        color: '#b3b3b3',
        fontSize: 16
    },
    shareListIcons: {
       flexDirection: 'row',
       marginVertical: 30 
    },
    listIcon: {
        height: 25
    },
    shareIcon: {
        height: 25
    },
    myListIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40
    },
    myShareIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        marginVertical: 10
    },
    light: {
        fontWeight: '200'
    }
})

export default Details